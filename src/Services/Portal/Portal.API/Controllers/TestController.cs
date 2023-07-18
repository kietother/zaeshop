using Common.Enums;
using Common.Interfaces;
using Hangfire;
using Microsoft.AspNetCore.Mvc;
using Portal.API.Attributes;
using Portal.Domain.AggregatesModel.UserAggregate;

namespace Portal.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IBackgroundJobClient _backgroundJobClient;
        private readonly IApiService _apiService;

        public TestController(
            IUnitOfWork unitOfWork,
            IBackgroundJobClient backgroundJobClient,
            IApiService apiService)
        {
            _unitOfWork = unitOfWork;
            _backgroundJobClient = backgroundJobClient;
            _apiService = apiService;
        }

        [HttpGet]
        [Route("users")]
        [Authorize]
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
    }
}
