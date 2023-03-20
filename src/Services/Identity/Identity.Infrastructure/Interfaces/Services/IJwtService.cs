using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Identity.Domain.AggregatesModel.UserAggregate;

namespace Identity.Infrastructure.Interfaces.Services
{
    public interface IJwtService
    {
        string GenerateJwtToken(User user);
        string? ValidateJwtToken(string token);
        UserToken GenerateRefreshToken(string ipAddress);
    }
}