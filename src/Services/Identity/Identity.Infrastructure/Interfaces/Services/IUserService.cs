using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Identity.Domain.AggregatesModel.UserAggregate;
using Identity.Domain.Models.ErrorResponses;
using Identity.Infrastructure.Models.Authenticates;
using Identity.Infrastructure.Models.Users;

namespace Identity.Infrastructure.Interfaces.Services
{
    public interface IUserService
    {
        Task<List<User>> GetAllAsync();
        Task<User?> GetByIdAsync(string id);
        Task<UserRegisterResponseModel?> CreateAsync(UserRegisterRequestModel userModel, ErrorResult errorResult);
    }
}