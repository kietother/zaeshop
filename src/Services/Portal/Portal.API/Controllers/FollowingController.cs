using Portal.API.Attributes;
using Microsoft.AspNetCore.Mvc;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.AlbumModels;
using Microsoft.AspNetCore.Identity;

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

        [HttpPost]
        public async Task<IActionResult> Create(FollowingRequestModel model)
        {
            model.UserId = GetIdentityUserIdByToken();
            var response = await _followingService.CreateAsync(model);

            if (!response.IsSuccess)
                return BadRequest(response);

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var response = await _followingService.DeleteAsync(id);

            if (!response.IsSuccess)
                return BadRequest(response);

            return Ok(response);
        }
    }
}
