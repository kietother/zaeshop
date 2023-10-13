using System.Security.Claims;
using Identity.Domain.Interface.Infrastructure;

namespace Identity.API.Middlewares
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;

        public JwtMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context, IJwtService jwtService)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split("Bearer ").Last();
            if (!string.IsNullOrWhiteSpace(token))
            {
                var userInfoModel = jwtService.ValidateJwtToken(token);
                if (userInfoModel != null && !string.IsNullOrEmpty(userInfoModel.Id))
                {
                    // Create ClaimsIdentity with user roles if available
                    var claimsIdentity = new ClaimsIdentity();
                    claimsIdentity.AddClaim(new Claim("id", userInfoModel.Id));

                    if (!string.IsNullOrEmpty(userInfoModel.FullName))
                        claimsIdentity.AddClaim(new Claim(ClaimTypes.GivenName, userInfoModel.FullName));

                    if (userInfoModel.Roles?.Any() == true)
                        claimsIdentity.AddClaims(userInfoModel.Roles.Select(role => new Claim(ClaimTypes.Role, role)));

                    // Create ClaimsPrincipal and set it to HttpContext.User
                    var principal = new ClaimsPrincipal(claimsIdentity);
                    context.User = principal;
                }
            }
            await _next(context);
        }
    }
}