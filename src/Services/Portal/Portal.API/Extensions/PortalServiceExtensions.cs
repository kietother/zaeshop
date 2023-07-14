using Microsoft.EntityFrameworkCore;
using Portal.Domain.SeedWork;
using Portal.Infrastructure;
using Portal.Infrastructure.Repositories;

namespace Portal.API.Extensions;
public static class PortalServiceExtensions
{
    public static IServiceCollection AddPortalServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddDbContext<ApplicationDbContext>(opt => opt.UseLazyLoadingProxies().UseSqlServer(config.GetConnectionString("PortalConnection")));

        // Inject Sẻvrvices
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        return services;
    }
}
