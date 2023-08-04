using Common.Models;

namespace Portal.Infrastructure.Interfaces.Services;
public interface IJwtService
{
    UserInfomationTokenModel? ValidateJwtToken(string token);
}
