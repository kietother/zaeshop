using Common.Enums;
using Common.Interfaces;
using Hangfire;
using Microsoft.AspNetCore.Mvc;
using Portal.API.Attributes;
using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.Interfaces.External;
using Portal.Domain.Models.ImageUploadModels;

namespace Portal.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IBackgroundJobClient _backgroundJobClient;
        private readonly IApiService _apiService;
        private readonly IImageService _imageService;
        private readonly IAmazonS3Service _amazonS3Service;

        public TestController(
            IUnitOfWork unitOfWork,
            IBackgroundJobClient backgroundJobClient,
            IApiService apiService,
            IImageService imageService,
            IAmazonS3Service amazonS3Service)
        {
            _unitOfWork = unitOfWork;
            _backgroundJobClient = backgroundJobClient;
            _apiService = apiService;
            _imageService = imageService;
            _amazonS3Service = amazonS3Service;
        }

        [HttpGet]
        [Route("users")]
        [Authorize(ERoles.Administrator)]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _unitOfWork.Repository<User>().GetAllAsync();
            return Ok(users);
        }

        [HttpGet]
        [Route("users-mapping")]
        public async Task<IActionResult> GetUserMapping()
        {
            var users = await _unitOfWork.Repository<User>().GetQueryable()
                .Filter(o => o.Id == 1)
                .Project(x => new { x.FullName, x.IdentityUserId })
                .ToListAsync();
            return Ok(users);
        }

        [HttpGet("portal-hangfire")]
        public IActionResult TestHangFire(string message)
        {
            _backgroundJobClient.Enqueue(() => Console.WriteLine(message));
            return Ok();
        }

        [HttpGet("identity-grpc-get-user")]
        public async Task<IActionResult> CallApiPortalAsync()
        {
            var result = await _apiService.GetAsync<object>(EServiceHost.Identity, "/v1/users");
            return Ok(result);
        }

        [HttpPost("bulk-upload")]
        // Limit 1 MB
        [RequestSizeLimit(1024 * 1024)]
        public async Task<IActionResult> BulkUploadAsync([FromForm] List<IFormFile> files)
        {
            // Validate and get data
            var listImages = new List<ImageUploadRequestModel>();
            foreach (var file in files)
            {
                var fileName = file.FileName;
                var fileBytes = GetFileBytes(file);

                listImages.Add(new ImageUploadRequestModel
                {
                    FileName = fileName,
                    ImageData = fileBytes
                });
            }

            var response = await _amazonS3Service.BulkUploadImages(listImages, "Test");
            return Ok(response);
        }

        private static byte[] GetFileBytes(IFormFile file)
        {
            using var ms = new MemoryStream();
            file.CopyTo(ms);
            return ms.ToArray();
        }
    }
}
