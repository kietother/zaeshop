using Hangfire;
using Hangfire.SqlServer;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.SeedWork;
using static Common.ValueObjects.Const;

namespace HangFireServer.Extensions
{
    public static class HangFireServiceExtension
    {
        public static IServiceCollection AddHangFireServices(this IServiceCollection services, IConfiguration config)
        {
            // Add Hangfire services.
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

            // Add the processing server as IHostedService
            services.AddHangfireServer();

            return services;
        }

        public static async Task StartHangFireJobs(this WebApplication app)
        {
            // 10 Minutes to calculate views from redis
            RecurringJob.AddOrUpdate<ICollectionService>(HangfireJobName.CalculateViewsFromRedis, x => x.CalculateViewsFromRedis(), "*/10 * * * *");

            var unitOfWork = app.Services.GetRequiredService<IUnitOfWork>();
            await unitOfWork.ExecuteAsync("Hangfire_ResetJobs");
        }
    }
}