using Common.Models;

namespace Portal.Domain.Interfaces.Infrastructure;
public interface IJwtService
{
    UserInfomationTokenModel? ValidateJwtToken(string token);
}
