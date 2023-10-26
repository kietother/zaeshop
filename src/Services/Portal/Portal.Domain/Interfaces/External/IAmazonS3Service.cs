using Portal.Domain.Models.ImageUploadModels;

namespace Portal.Domain.Interfaces.External
{
    public interface IAmazonS3Service
    {
        Task<List<ImageUploadResultModel>> BulkUploadImages(List<ImageUploadRequestModel> requestModels, string? prefix = null);
    }
}
