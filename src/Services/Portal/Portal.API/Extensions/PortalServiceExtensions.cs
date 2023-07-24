﻿using Common.Implements;
using Common.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Portal.API.Middlewares;
using Portal.Infrastructure;
using Portal.Infrastructure.Implements.Services;
using Portal.Infrastructure.Interfaces.Services;
using Portal.Infrastructure.Repositories;

namespace Portal.API.Extensions;
public static class PortalServiceExtensions
{
    public static IServiceCollection AddPortalServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddDbContext<ApplicationDbContext>(opt => opt.UseLazyLoadingProxies().UseSqlServer(config.GetConnectionString("PortalConnection")));
        services.Configure<AppSettings>(config.GetSection("AppSettings"));
        services.Configure<ApiBehaviorOptions>(options =>
        {
            options.InvalidModelStateResponseFactory = _ => new ValidateModelActionResult();
        });

        services.AddScoped<IApiService, ApiService>();

        // Inject Services
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<IJwtService, JwtService>();
        return services;
    }
}
