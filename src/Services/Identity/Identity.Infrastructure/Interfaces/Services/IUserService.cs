using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Identity.Domain.AggregatesModel.UserAggregate;
using Identity.Domain.POCOs.ErrorResponses;
using Identity.Infrastructure.Models.Authenticates;
using Identity.Infrastructure.Models.Users;

namespace Identity.Infrastructure.Interfaces.Services
{
    public interface IUserService
    {
        Task<AuthenticateResponse?> AuthenticateAsync(AuthenticateRequest model, string ipAddress);
        Task<AuthenticateResponse> RefreshTokenAsync(string token, string ipAddress);
        Task RevokeTokenAsync(string token, string ipAddress);
        Task<List<User>> GetAllAsync();
        Task<User?> GetByIdAsync(string id);
        Task<UserRegisterResponseModel?> Create(UserRegisterRequestModel userModel, ErrorResult errorResult);
    }
}