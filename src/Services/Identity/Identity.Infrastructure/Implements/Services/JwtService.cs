using Dapper;
using System;
using System.Data;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Identity.Domain.AggregatesModel.UserAggregate;
using Identity.Infrastructure.Interfaces.Services;
using Identity.Infrastructure.Models.Helpers;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Identity.Infrastructure.Implements.Services
{
    public class JwtService : IJwtService
    {
        private readonly AppIdentityDbContext _context;
        private readonly AppSettings _appSettings;

        public JwtService(
            AppIdentityDbContext context,
            IOptions<AppSettings> appSettings)
        {
            _context = context;
            _appSettings = appSettings.Value;
        }

        public string GenerateJwtToken(User user)
        {
            // generate token that is valid for 15 minutes
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("id", user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddMinutes(15),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public string? ValidateJwtToken(string token)
        {
            if (token == null)
                return null;

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            try
            {
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

                var jwtToken = (JwtSecurityToken)validatedToken;
                var userId = jwtToken.Claims.First(x => x.Type == "id").Value;

                // return user id from JWT token if validation successful
                return userId;
            }
            catch
            {
                // return null if validation fails
                return null;
            }
        }

        public UserToken GenerateRefreshToken(string ipAddress)
        {
            var refreshToken = new UserToken
            {
                Token = getUniqueToken(),
                // token is valid for 7 days
                ExpiresOnUtc = DateTime.UtcNow.AddDays(7),
                CreatedByIp = ipAddress
            };

            return refreshToken;
        }


        private string getUniqueToken()
        {
            // token is a cryptographically strong random sequence of values
            var token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64));
            // ensure token is unique by checking against db
            var isExistsToken = _context.Users.Any(u => u.UserTokens.Any(t => t.Token == token));
            var tokenIsUnique = !isExistsToken;

            if (!tokenIsUnique)
                return getUniqueToken();

            return token;
        }
    }
}