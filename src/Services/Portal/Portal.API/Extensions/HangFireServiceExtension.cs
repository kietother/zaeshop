using Hangfire;
using Hangfire.SqlServer;

namespace Portal.API.Extensions
{
    public static class HangFireServiceExtension
    {
        public static IServiceCollection AddHangFireServices(this IServiceCollection services, IConfiguration config)
        {
            // Add Hangfire services.
            bool isDeployed = bool.Parse(Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT_DEPLOYED") ?? "false");
            if (isDeployed)
            {
                services.AddHangfire(configuration => configuration
                               .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
                               .UseSimpleAssemblyNameTypeSerializer()
                               .UseRecommendedSerializerSettings()
                               .UseSqlServerStorage(config.GetConnectionString("HangfireConnection"), new SqlServerStorageOptions
                               {
                                   CommandBatchMaxTimeout = TimeSpan.FromMinutes(5),
                                   SlidingInvisibilityTimeout = TimeSpan.FromMinutes(5),
                                   QueuePollInterval = TimeSpan.Zero,
                                   UseRecommendedIsolationLevel = true,
                                   DisableGlobalLocks = true
                               }));
            }
            else
            {
                // Add Hangfire services - In memory
                var inMemory = GlobalConfiguration.Configuration.UseInMemoryStorage();
                services.AddHangfire(x => x.UseInMemoryStorage());
                services.AddHangfireServer();
            }

            return services;
        }
    }
}