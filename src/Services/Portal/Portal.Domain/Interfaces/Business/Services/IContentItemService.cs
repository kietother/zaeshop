using Common.Models;
using Portal.Domain.Models.CollectionModels;
using Portal.Domain.Models.ContentItemModels;

namespace Portal.Domain.Interfaces.Business.Services
{
    public interface IContentItemService
    {
        Task<ServiceResponse<bool>> CreateContentItemsAsync(int collectionId, ContentItemRequestModel model);
        Task<ServiceResponse<bool>> UpdateContentItemsAsync(int collectionId, ContentItemUpdateRequestModel model);
    }
}
