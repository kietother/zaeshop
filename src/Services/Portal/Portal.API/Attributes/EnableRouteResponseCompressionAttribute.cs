using Microsoft.AspNetCore.Mvc;

namespace Portal.API.Attributes
{
    public class EnableRouteResponseCompressionAttribute : MiddlewareFilterAttribute
    {
        public EnableRouteResponseCompressionAttribute() : base(typeof(EnableRouteResponseCompressionAttribute))
        {
        }

        public void Configure(IApplicationBuilder applicationBuilder) => applicationBuilder.UseResponseCompression();
    }
}
