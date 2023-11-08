using Portal.Domain.Interfaces.Business.Services;
using Portal.Infrastructure.Implements.Business.Services;

namespace Portal.API.Extensions
{
    public static class BusinessServiceExtension
    {
        public static IServiceCollection AddBusinessServices(this IServiceCollection services)
        {
            // Inject Services
            services.AddScoped<IContentTypeService, ContentTypeService>();
            services.AddScoped<IAlbumAlertMessageService, AlbumAlertMessageService>();
            services.AddScoped<IAlbumService, AlbumService>();
            services.AddScoped<ICollectionService, CollectionService>();
            services.AddScoped<IContentItemService, ContentItemService>();

            return services;
        }
    }
}