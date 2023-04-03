using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Identity.Domain.Models.ErrorResponses;
using Identity.Infrastructure.Models.Authenticates;
using Identity.Infrastructure.Models.Users;

namespace Identity.Infrastructure.Interfaces.Services
{
    public interface IAccountService
    {
        Task<AuthenticateResponse?> AuthenticateAsync(AuthenticateRequest model, string ipAddress);
        Task<AuthenticateResponse> RefreshTokenAsync(string token, string ipAddress);
        Task RevokeTokenAsync(string token, string ipAddress);
        Task<UserRegisterResponseModel?> RegisterAsync(UserRegisterRequestModel userModel, ErrorResult errorResult);
        Task<AuthenticateResponse> VerifyEmailAsync(string token, string ipAddress, ErrorResult errorResult);
        Task ValidateResetTokenAsync(ValidateResetTokenRequest model, ErrorResult errorResult);
        Task ForgotPasswordAsync(ForgotPasswordRequest model, string origin, ErrorResult errorResult);
        Task<AuthenticateResponse> ResetPasswordAsync(ResetPasswordRequest model, string ipAddress, ErrorResult errorResult);
    }
}