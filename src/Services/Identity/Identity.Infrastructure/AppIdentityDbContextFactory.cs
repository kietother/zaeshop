using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Identity.Infrastructure
{
    // Disable temp for UseNpgsql
    // public class AppIdentityDbContextFactory : IDesignTimeDbContextFactory<AppIdentityDbContext>
    // {
    //     public AppIdentityDbContext CreateDbContext(string[] args)
    //     {
    //         IConfigurationRoot configuration = new ConfigurationBuilder()
    //         .SetBasePath(Directory.GetCurrentDirectory())
    //         .AddJsonFile("appsettings.json")
    //         .Build();

    //         var builder = new DbContextOptionsBuilder<AppIdentityDbContext>();
    //         var connectionString = configuration.GetConnectionString("IdentityConnection");

    //         builder.UseNpgsql(connectionString);

    //         return new AppIdentityDbContext(builder.Options);
    //     }
    // }
}