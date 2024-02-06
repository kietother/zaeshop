using Portal.API.Attributes;
using Microsoft.AspNetCore.Mvc;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.AlbumModels;
using Common.Models;
using Portal.Infrastructure.Implements.Business.Services;

namespace Portal.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class FollowingController : BaseApiController
    {
        private readonly IFollowingService _followingService;

        public FollowingController(IFollowingService followingService)
        {
            _followingService = followingService;
        }

        [HttpGet]
        public async Task<IActionResult> GetStatusFollowing([FromQuery] FollowingRequestModel model)
        {
            model.UserId = GetIdentityUserIdByToken();
            var response = await _followingService.GetStatusFollowAsync(model);

            if (!response.IsSuccess)
                return BadRequest(response);

            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> Create(FollowingRequestModel model)
        {
            model.UserId = GetIdentityUserIdByToken();
            var response = await _followingService.CreateAsync(model);

            if (!response.IsSuccess)
                return BadRequest(response);

            return Ok(response);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromQuery] FollowingRequestModel model)
        {
            model.UserId = GetIdentityUserIdByToken();
            var response = await _followingService.DeleteAsync(model);

            if (!response.IsSuccess)
                return BadRequest(response);

            return Ok(response);
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetPagingAsync([FromQuery] PagingCommonRequest request)
        {
            var filter = new FollowingRequestModel();
            filter.UserId = GetIdentityUserIdByToken();
            var response = await _followingService.GetPagingAsync(request, filter);

            if (!response.IsSuccess)
                return BadRequest(response);

            return Ok(response);
        }
    }
}
