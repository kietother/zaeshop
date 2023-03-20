using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Identity.Domain.AggregatesModel.UserAggregate;
using Identity.Infrastructure.Interfaces.Services;
using Identity.Infrastructure.Models.Authenticates;

namespace Identity.Infrastructure.Implements.Services
{
    public class UserService : IUserService
    {
        private readonly AppIdentityDbContext _context;
        private readonly IJwtService _jwtService;

        public UserService(
            AppIdentityDbContext context,
            IJwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        public AuthenticateResponse Authenticate(AuthenticateRequest model, string ipAddress)
        {
            throw new NotImplementedException();
        }

        public AuthenticateResponse RefreshToken(string token, string ipAddress)
        {
            throw new NotImplementedException();
        }

        public void RevokeToken(string token, string ipAddress)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetAll()
        {
            var users = _context.Users.ToList();
            return users;
        }

        public User GetById(string id)
        {
            var user = _context.Users.FirstOrDefault(o => o.Id == id);
            return user;
        }
    }
}