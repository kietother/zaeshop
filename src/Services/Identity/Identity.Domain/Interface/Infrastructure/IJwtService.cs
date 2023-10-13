using Common.Models;
using Identity.Domain.AggregatesModel.UserAggregate;

namespace Identity.Domain.Interface.Infrastructure
{
    public interface IJwtService
    {
        string GenerateJwtToken(User user);
        UserInfomationTokenModel? ValidateJwtToken(string token);
        UserToken GenerateRefreshToken(string ipAddress);
    }
}