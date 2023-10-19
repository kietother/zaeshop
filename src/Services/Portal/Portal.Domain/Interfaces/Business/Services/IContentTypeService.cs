using Common.Models;
using Portal.Domain.Models.ContentTypeModels;

namespace Portal.Domain.Interfaces.Business.Services
{
    public interface IContentTypeService
    {
        Task<ServiceResponse<ContentTypeResponseModel>> CreateAsync(ContentTypeRequestModel request);
        Task<ServiceResponse<ContentTypeResponseModel>> UpdateAsync(int id, ContentTypeRequestModel request);
        Task<ServiceResponse<List<ContentTypeResponseModel>>> GetAllAsync();
        Task<ServiceResponse<bool>> DeleteAsync(int id);
    }
}
