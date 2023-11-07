using Amazon.S3;
using Common.Implements;
using Common.Interfaces;
using Common.Models.Redis;
using Microsoft.Extensions.Caching.Distributed;
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

        services.AddStackExchangeRedisCache(options =>
         {
             options.Configuration = config.GetConnectionString("RedisConnection");
             options.InstanceName = "Portal";
         });

        services.AddScoped<IRedisService>(x => new RedisService(x.GetRequiredService<IDistributedCache>(), new RedisOptions
        {
            Host = config.GetSection("RedisSettings").GetValue<string>("Host") ?? string.Empty,
            Port = config.GetSection("RedisSettings").GetValue<string>("Port") ?? string.Empty,
            InstanceName = "Portal"
        }));

        // Inject Services
        services.AddScoped<IApiService, ApiService>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<IJwtService, JwtService>();
        services.AddScoped<IAmazonS3Service, AmazonS3Service>();
        return services;
    }
}
