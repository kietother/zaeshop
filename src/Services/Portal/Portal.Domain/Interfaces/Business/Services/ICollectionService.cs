using Common.Models;
using Portal.Domain.Models.CollectionModels;

namespace Portal.Domain.Interfaces.Business.Services
{
    public interface ICollectionService
    {
        Task<ServiceResponse<CollectionResponseModel>> CreateAsync(CollectionRequestModel request);
        Task<ServiceResponse<CollectionResponseModel>> UpdateAsync(int id, CollectionRequestModel request);
        Task<ServiceResponse<List<CollectionResponseModel>>> GetAllAsync();
        Task<ServiceResponse<bool>> DeleteAsync(int id);
    }
}
