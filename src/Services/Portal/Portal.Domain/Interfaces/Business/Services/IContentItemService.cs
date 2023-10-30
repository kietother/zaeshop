using Common.Models;
using Portal.Domain.Models.CollectionModels;

namespace Portal.Domain.Interfaces.Business.Services
{
    public interface IContentItemService
    {
        Task<ServiceResponse<bool>> CreateContentItemsAsync(int id, ContentItemRequestModel model);
    }
}
