namespace Portal.Infrastructure.Interfaces.Services;
public interface IJwtService
{
    string? ValidateJwtToken(string token);
}
