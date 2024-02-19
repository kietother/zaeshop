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

        public static void StartHangFireJobs(this WebApplication app)
        {
            using var scope = app.Services.CreateScope();
            var unitOfWork = scope.ServiceProvider.GetRequiredService<IUnitOfWork>();
            unitOfWork.ExecuteAsync("Hangfire_ResetJobs");

            // 10 Minutes to calculate views from redis
            RecurringJob.AddOrUpdate<ICollectionService>(HangfireJobName.CalculateViewsFromRedis, x => x.CalculateViewsFromRedisTaskAsync(), "*/10 * * * *");

            // 30 Minutes to calculate exps from redis
            RecurringJob.AddOrUpdate<ILevelService>(HangfireJobName.CalculateExperiencesFromRedis, x => x.CalculateExperiencesFromRedisTaskAsync(), "*/30 * * * *");

            // 12 Hours to calculate exps from redis
            RecurringJob.AddOrUpdate<IEmailService>(HangfireJobName.SendEmailSPremiumFollowers, x => x.SendEmailToFollowersAsync(), "0 */12 * * *");
        }
    }
}