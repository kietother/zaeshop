using Common.Models;
using Portal.Domain.Models.ContentTypeModels;

namespace Portal.Domain.Interfaces.Business.Services
{
    public interface IContentTypeService
    {
        Task<ServiceResponse<ContentTypeResponseModel>> CreateContentTypeAsync(ContentTypeRequestModel request);
        Task<ServiceResponse<ContentTypeResponseModel>> UpdateContentTypeAsync(int id, ContentTypeRequestModel request);
        Task<ServiceResponse<List<ContentTypeResponseModel>>> GetAllContentTypesAsync();
        Task<ServiceResponse<bool>> DeleteContentTypeAsync(int id);
    }
}
