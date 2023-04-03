using Hangfire;
using Hangfire.SqlServer;

namespace Identity.API.Extensions
{
    public static class HangFireServiceExtension
    {
        public static IServiceCollection AddHangFireServices(this IServiceCollection services, IConfiguration config)
        {
            // Add Hangfire services.
            // services.AddHangfire(configuration => configuration
            //     .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
            //     .UseSimpleAssemblyNameTypeSerializer()
            //     .UseRecommendedSerializerSettings()
            //     .UseSqlServerStorage(config.GetConnectionString("HangfireConnection"), new SqlServerStorageOptions
            //     {
            //         CommandBatchMaxTimeout = TimeSpan.FromMinutes(5),
            //         SlidingInvisibilityTimeout = TimeSpan.FromMinutes(5),
            //         QueuePollInterval = TimeSpan.Zero,
            //         UseRecommendedIsolationLevel = true,
            //         DisableGlobalLocks = true
            //     }));

            // Add Hangfire services - In memory
            var inMemory = GlobalConfiguration.Configuration.UseInMemoryStorage();
            services.AddHangfire(x => x.UseInMemoryStorage());

            // Add the processing server as IHostedService
            // Remove comment if we use hangfire to run this server
            services.AddHangfireServer();

            return services;
        }
    }
}