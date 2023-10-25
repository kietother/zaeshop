using System.Net;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Portal.Domain.Interfaces.External;
using Portal.Domain.Models.ImageUploadModels;
using Portal.Infrastructure.Helpers;
using RestSharp;

namespace Portal.Infrastructure.Implements.External
{
    public class ImageService : IImageService
    {
        private readonly ApiSettings _apiSettings;

        public ImageService(IOptions<ApiSettings> apiSettings)
        {
            _apiSettings = apiSettings.Value;
        }

        public async Task<List<ImageUploadResponseModel>> BulkUploadAsync(List<ImageUploadRequestModel> requestModels, int? expiration = null)
        {
            var client = new RestClient("https://api.imgbb.com");

            var request = new RestRequest("1/upload", Method.Post);
            request.AddQueryParameter("key", _apiSettings.ImgbbApiKey);

            foreach (var imageRequest in requestModels)
            {
                request.AddFile("image", imageRequest.ImageData, imageRequest.FileName);
            }

            if (expiration.HasValue)
            {
                request.AddParameter("expiration", expiration.Value);
            }

            var response = await client.ExecuteAsync(request);

            if (!response.IsSuccessful)
            {
                if (response.StatusCode == HttpStatusCode.Forbidden)
                {
                    throw new Exception("Invalid API key");
                }
                else if (response.StatusCode == HttpStatusCode.UnsupportedMediaType)
                {
                    throw new Exception("Unsupported image type");
                }
                else
                {
                    throw new Exception(response.StatusDescription);
                }
            }

            var imageResponses = JsonConvert.DeserializeObject<List<ImageUploadResponseModel>>(response.Content);
            return imageResponses;
        }
    }
}
