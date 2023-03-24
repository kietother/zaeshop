using Identity.Domain.AggregatesModel.UserAggregate;
using Identity.Infrastructure;
using Identity.Infrastructure.Implements.Services;
using Identity.Infrastructure.Interfaces.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using EmailHelper.Models;
using EmailHelper.Services;

namespace Identity.API.Extensions
{
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services,
          IConfiguration config)
        {
            services.AddDbContext<AppIdentityDbContext>(opt => opt.UseLazyLoadingProxies().UseNpgsql(config.GetConnectionString("DefaultConnection")));
            services.AddSingleton<ISystemClock, SystemClock>();

            services.AddIdentityCore<User>(_ =>
            {
                // add identity options here
            })
            .AddEntityFrameworkStores<AppIdentityDbContext>()
            .AddSignInManager<SignInManager<User>>();

            var appSettingsConfig = config.GetSection("AppSettings");
            var options = new EmailOptions
            {
                Environment = appSettingsConfig.GetValue<string>("Environment"),
                SmtpServer = appSettingsConfig.GetValue<string>("SmtpServer"),
                SmtpPort = appSettingsConfig.GetValue<int>("SmtpPort"),
                SmtpUser = appSettingsConfig.GetValue<string>("SmtpUser"),
                SmtpPassword = appSettingsConfig.GetValue<string>("SmtpPass"),
                MailFrom = appSettingsConfig.GetValue<string>("EmailFrom"),
            };
            services.AddScoped<IEmailService>(x =>
                new EmailMockupService(x.GetRequiredService<ILogger<EmailMockupService>>(), options)
            );

            // configure DI for application services
            services.AddScoped<IJwtService, JwtService>();
            services.AddScoped<IUserService, UserService>();
            return services;
        }
    }
}