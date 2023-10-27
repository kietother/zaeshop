using Common.Models;
using Portal.Domain.Models.CollectionModels;

namespace Portal.Domain.Interfaces.Business.Services
{
    public interface ICollectionService
    {
        Task<ServiceResponse<CollectionResponseModel>> CreateAsync(CollectionRequestModel requestModel);
        Task<ServiceResponse<CollectionResponseModel>> UpdateAsync(int id, CollectionRequestModel requestModel);
        Task<ServiceResponse<List<CollectionResponseModel>>> GetAllAsync();
        Task<ServiceResponse<bool>> DeleteAsync(int id);
        Task<ServiceResponse<bool>> CreateContentItemsAsync(int id, ContentItemRequestModel model);
    }
}
