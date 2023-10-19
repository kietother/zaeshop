using Common.Models;
using Portal.Domain.Models.AlbumAlertMessageModels;

namespace Portal.Domain.Interfaces.Business.Services
{
    public interface IAlbumAlertMessageService
    {
        Task<ServiceResponse<AlbumAlertMessageResponseModel>> AddAsync(AlbumAlertMessageRequestModel requestModel);
        Task<ServiceResponse<AlbumAlertMessageResponseModel>> UpdateAsync(int id, AlbumAlertMessageRequestModel requestModel);
        Task<ServiceResponse<List<AlbumAlertMessageResponseModel>>> GetAllAsync();
        Task<ServiceResponse<bool>> DeleteAsync(int id);
    }
}
