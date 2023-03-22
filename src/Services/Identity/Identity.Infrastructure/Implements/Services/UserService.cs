using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Identity.Domain.AggregatesModel.UserAggregate;
using Identity.Domain.POCOs.ErrorCodes;
using Identity.Domain.POCOs.ErrorResponses;
using Identity.Infrastructure.Interfaces.Services;
using Identity.Infrastructure.Models.Authenticates;
using Identity.Infrastructure.Models.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Identity.Infrastructure.Implements.Services
{
    public class UserService : IUserService
    {
        private readonly AppIdentityDbContext _context;
        private readonly IJwtService _jwtService;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UserService(
            AppIdentityDbContext context,
            IJwtService jwtService,
            UserManager<User> userManager,
            SignInManager<User> signInManager)
        {
            _context = context;
            _jwtService = jwtService;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        #region Authorization
        public async Task<AuthenticateResponse?> AuthenticateAsync(AuthenticateRequest model, string ipAddress)
        {
            var user = await _context.Users.FirstOrDefaultAsync(o => o.UserName == model.Username);

            if (user == null)
                return null;

            var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);
            if (!result.Succeeded)
            {
                return new AuthenticateResponse
                {
                    ErrorResult = Convert.ToString(ErrorCodes.UserOrPasswordNotCorrect)
                };
            }

            // authentication successful so generate jwt and refresh tokens
            var jwtToken = _jwtService.GenerateJwtToken(user);
            var refreshToken = _jwtService.GenerateRefreshToken(ipAddress);
            user.UserTokens.Add(refreshToken);

            // Remove referesh token is not unnecessary

            // save changes to db
            _context.Update(user);
            await _context.SaveChangesAsync();

            return new AuthenticateResponse(user, jwtToken, refreshToken);
        }

        public async Task<AuthenticateResponse> RefreshTokenAsync(string token, string ipAddress)
        {
            var user = GetUserByRefreshToken(token);
            var refreshToken = user.UserTokens.FirstOrDefault(x => x.Token == token);

            if (!refreshToken.IsActive)
                throw new Exception("Invalid token");

            // replace old refresh token with a new one (rotate token)
            var newRefreshToken = RotateRefreshToken(refreshToken, ipAddress);
            user.UserTokens.Add(newRefreshToken);

            _context.Update(user);
            await _context.SaveChangesAsync();

            // generate new jwt
            var jwtToken = _jwtService.GenerateJwtToken(user);

            return new AuthenticateResponse(user, jwtToken, newRefreshToken);
        }

        public async Task RevokeTokenAsync(string token, string ipAddress)
        {
            var user = GetUserByRefreshToken(token);
            var refreshToken = user.UserTokens.FirstOrDefault(x => x.Token == token);

            if (!refreshToken.IsActive)
                throw new Exception("Invalid token");

            // revoke token and save
            RevokeRefreshToken(refreshToken, ipAddress, "Revoked without replacement");
            _context.Update(user);
            await _context.SaveChangesAsync();
        }

        private User? GetUserByRefreshToken(string token)
        {
            var user = _context.Users.SingleOrDefault(u => u.UserTokens.Any(t => t.Token == token));

            if (user == null)
                throw new Exception("Invalid token");

            return user;
        }

        private UserToken RotateRefreshToken(UserToken refreshToken, string ipAddress)
        {
            var newRefreshToken = _jwtService.GenerateRefreshToken(ipAddress);
            RevokeRefreshToken(refreshToken, ipAddress, "Replaced by new token", newRefreshToken.Token);
            return newRefreshToken;
        }

        private void RevokeRefreshToken(UserToken token, string ipAddress, string? reason = null, string? replacedByToken = null)
        {
            token.RevokedOnUtc = DateTime.UtcNow;
            token.RevokedByIp = ipAddress;
            token.ReasonRevoked = reason;
            token.ReplacedByToken = replacedByToken;
        }
        #endregion

        public async Task<List<User>> GetAllAsync()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }

        public async Task<User?> GetByIdAsync(string id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(o => o.Id == id);
            return user;
        }

        public async Task<UserRegisterResponseModel?> Create(UserRegisterRequestModel userModel, ErrorResult errorResult)
        {
            var existsUser = await _userManager.FindByNameAsync(userModel.Email);
            if (existsUser == null)
            {
                errorResult.Description = nameof(ErrorCodes.UserNotExists);
                return null;
            }

            var user = new User
            {
                UserName = userModel.Username,
                Email = userModel.Email,
                FullName = userModel.FullName
            };

            var result = await _userManager.CreateAsync(user, userModel.Password);
            if (!result.Succeeded)
            {
                errorResult.Description = string.Join(", ", result.Errors.Select(o => o.Description));
                return null;
            }

            return new UserRegisterResponseModel {
                Email = user.Email,
                FullName = user.FullName,
                Username = user.UserName
            };
        }
    }
}