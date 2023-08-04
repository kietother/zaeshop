using Common.Models;
using Identity.Domain.AggregatesModel.UserAggregate;

namespace Identity.Infrastructure.Interfaces.Services
{
    public interface IJwtService
    {
        string GenerateJwtToken(User user);
        UserInfomationTokenModel? ValidateJwtToken(string token);
        UserToken GenerateRefreshToken(string ipAddress);
    }
}