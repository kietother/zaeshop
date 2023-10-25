using Common.Implements;
using Common.Interfaces;
using Microsoft.EntityFrameworkCore;
using Portal.Domain.Interfaces.External;
using Portal.Domain.Interfaces.Infrastructure;
using Portal.Domain.SeedWork;
using Portal.Infrastructure;
using Portal.Infrastructure.Helpers;
using Portal.Infrastructure.Implements.External;
using Portal.Infrastructure.Implements.Services;
using Portal.Infrastructure.SeedWork;

namespace HangFireServer.Extensions;
public static class PortalServiceExtensions
{
    public static IServiceCollection AddPortalServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddDbContext<ApplicationDbContext>(opt => opt.UseLazyLoadingProxies().UseSqlServer(config.GetConnectionString("PortalConnection")));
        services.Configure<AppSettings>(config.GetSection("AppSettings"));
        services.Configure<ApiSettings>(config.GetSection("ApiSettings"));

        // Inject Services
        services.AddScoped<IApiService, ApiService>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<IJwtService, JwtService>();
        services.AddScoped<IImageService, ImageService>();
        return services;
    }
}
