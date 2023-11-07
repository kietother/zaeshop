using System.Text;
using Common.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Portal.API.Attributes
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class RedisCacheAttribute : Attribute, IAsyncActionFilter
    {
        private readonly int timeToLiveMinutes;

        public RedisCacheAttribute(int timeToLiveMinutes)
        {
            this.timeToLiveMinutes = timeToLiveMinutes;
        }

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            // 1. Get Service CacheResponse
            var service = context.HttpContext.RequestServices.GetRequiredService<IRedisService>();

            // 2. Create or Build the key cache
            var cacheKey = GenerateCacheKeyFromRequest(context.HttpContext.Request);

            // 3. Check key cache is exsists
            var cachedResponse = await service.GetAsync<object>(cacheKey);
            if (cachedResponse != null)
            {
                context.Result = new ContentResult
                {
                    Content = cachedResponse.ToString(),
                    ContentType = "application/json",
                    StatusCode = 200
                };

                return;
            }

            // 4. Else Create new cache
            var executedContext = await next(); // Move controller
            if (executedContext.Result is OkObjectResult okObjectResult)
            {
                await service.SetAsync(cacheKey, okObjectResult.Value, timeToLiveMinutes);
            }
        }

        private static string GenerateCacheKeyFromRequest(HttpRequest request)
        {
            StringBuilder keyBuilder = new();
            keyBuilder.Append(request.Path);

            // Query string from url
            foreach (var (key, value) in request.Query.OrderBy(q => q.Key))
            {
                keyBuilder.Append($"|{key}-{value}");
            }

            return keyBuilder.ToString().ToLower();
        }
    }
}
