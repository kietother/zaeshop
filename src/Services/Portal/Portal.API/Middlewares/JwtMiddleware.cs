using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Infrastructure.Interfaces.Services;

namespace Identity.API.Middlewares
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;

        public JwtMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context, IUnitOfWork unitOfWork, IJwtService jwtService)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split("Bearer ").Last();
            var userId = jwtService.ValidateJwtToken(token ?? string.Empty);

            if (!string.IsNullOrEmpty(userId))
            {
                // attach user to context on successful jwt validation
                context.Items["User"] = await unitOfWork.Repository<User>().GetQueryable().Filter(o => o.IdentityUserId == userId).FirstOrDefaultAsync();
            }

            await _next(context);
        }
    }
}