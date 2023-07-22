using Identity.Infrastructure.Interfaces.Services;

namespace Identity.API.Middlewares
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;

        public JwtMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context, IUserService userService, IJwtService jwtService)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split("Bearer ").Last();
            var userId = jwtService.ValidateJwtToken(token ?? string.Empty);

            if (!string.IsNullOrEmpty(userId))
            {
                // attach user to context on successful jwt validation
                context.Items["User"] = await userService.GetByIdAsync(userId);
            }

            await _next(context);
        }
    }
}