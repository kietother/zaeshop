using Identity.API.Extensions;
using Identity.API.HealthCheck;
using Identity.Infrastructure.Models.Helpers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
{
    builder.Services.AddControllers();
    builder.Services.AddHealthChecks().AddCheck<SampleHealthCheck>("sample");

    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
    builder.Services.AddIdentityServices(builder.Configuration);

    builder.Services.AddCors();

    builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));
}

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

{
    app.UseHttpsRedirection();

    app.UseCors(x => x
       .SetIsOriginAllowed(origin => true)
       .AllowAnyMethod()
       .AllowAnyHeader()
       .AllowCredentials());

    app.UseAuthorization();

    app.MapHealthChecks("/healthz");
    app.MapControllers();
}

app.Run();
