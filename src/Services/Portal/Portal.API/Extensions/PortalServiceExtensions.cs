using Common.Implements;
using Common.Interfaces;
using Portal.Domain.Interfaces.Infrastructure;
using Portal.Infrastructure;
using Portal.Infrastructure.Implements.Services;
using Portal.Infrastructure.SeedWork;

namespace Portal.API.Extensions;
public static class PortalServiceExtensions
{
    public static IServiceCollection AddPortalServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddDbContext<ApplicationDbContext>(opt => opt.UseLazyLoadingProxies().UseSqlServer(config.GetConnectionString("PortalConnection")));
        services.Configure<AppSettings>(config.GetSection("AppSettings"));

        // Inject Services
        services.AddScoped<IApiService, ApiService>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<IJwtService, JwtService>();
        return services;
    }
}
