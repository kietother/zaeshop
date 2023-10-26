using Amazon.S3;
using Common.Implements;
using Common.Interfaces;
using Portal.Domain.Interfaces.External;
using Portal.Domain.Interfaces.Infrastructure;
using Portal.Infrastructure;
using Portal.Infrastructure.Implements.External;
using Portal.Infrastructure.Implements.Services;
using Portal.Infrastructure.SeedWork;

namespace Portal.API.Extensions;
public static class PortalServiceExtensions
{
    public static IServiceCollection AddPortalServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddDbContext<ApplicationDbContext>(opt => opt.UseLazyLoadingProxies().UseSqlServer(config.GetConnectionString("PortalConnection")));
        services.Configure<AppSettings>(config.GetSection("AppSettings"));

        services.AddDefaultAWSOptions(config.GetAWSOptions());
        services.AddAWSService<IAmazonS3>();

        // Inject Services
        services.AddScoped<IApiService, ApiService>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<IJwtService, JwtService>();
        services.AddScoped<IAmazonS3Service, AmazonS3Service>();
        return services;
    }
}
