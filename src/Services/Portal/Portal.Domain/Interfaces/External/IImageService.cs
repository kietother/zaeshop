using Portal.Domain.Models.ImageUploadModels;

namespace Portal.Domain.Interfaces.External
{
    public interface IImageService
    {
        Task<List<ImageUploadResponseModel>> BulkUploadAsync(List<ImageUploadRequestModel> requestModels, int? expiration = null);
    }
}
