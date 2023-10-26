using Portal.Domain.Interfaces.External;
using Portal.Domain.Models.ImageUploadModels;

namespace Portal.Infrastructure.Implements.External
{
    public class ImageService : IImageService
    {
        public async  Task<List<ImageUploadResultModel>> BulkUploadAsync(List<ImageUploadRequestModel> requestModels, int? expiration = null)
        {
            return null;
        }
    }
}
