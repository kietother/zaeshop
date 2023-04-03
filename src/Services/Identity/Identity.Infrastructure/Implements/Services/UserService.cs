using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Identity.Domain.AggregatesModel.UserAggregate;
using Identity.Domain.Models.ErrorCodes;
using Identity.Domain.Models.ErrorResponses;
using Identity.Infrastructure.Interfaces.Services;
using Identity.Infrastructure.Models.Authenticates;
using Identity.Infrastructure.Models.Helpers;
using Identity.Infrastructure.Models.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Identity.Infrastructure.Implements.Services
{
    public class UserService : IUserService
    {
        private readonly AppIdentityDbContext _context;
        private readonly IJwtService _jwtService;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly AppSettings _appSettings;

        public UserService(
            AppIdentityDbContext context,
            IJwtService jwtService,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IOptions<AppSettings> appSettings)
        {
            _context = context;
            _jwtService = jwtService;
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
        }

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

        public async Task<UserRegisterResponseModel?> CreateAsync(UserRegisterRequestModel userModel, ErrorResult errorResult)
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
                FullName = userModel.FullName,
                VerifiedOnUtc = DateTime.UtcNow,
            };

            var result = await _userManager.CreateAsync(user, userModel.Password);
            if (!result.Succeeded)
            {
                errorResult.Description = string.Join(", ", result.Errors.Select(o => o.Description));
                return null;
            }

            return new UserRegisterResponseModel
            {
                Email = user.Email,
                FullName = user.FullName,
                Username = user.UserName
            };
        }
    }
}