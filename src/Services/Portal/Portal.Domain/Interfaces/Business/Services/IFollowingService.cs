using Common.Models;
using Portal.Domain.Models.AlbumModels;

namespace Portal.Domain.Interfaces.Business.Services
{
    public interface IFollowingService
    {
        Task<ServiceResponse<FollowingResponseModel>> CreateAsync(FollowingRequestModel requestModel);
        Task<ServiceResponse<bool>> DeleteAsync(FollowingRequestModel requestModel);
        Task<ServiceResponse<bool>> GetStatusFollowAsync(FollowingRequestModel requestModel);
        Task<ServiceResponse<PagingCommonResponse<FollowingPagingResponse>>> GetPagingAsync(PagingCommonRequest request, FollowingRequestModel filter);
    }
}
