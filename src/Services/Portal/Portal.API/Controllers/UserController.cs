using Common.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Portal.API.Attributes;
using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.ActivityLogs;
using Portal.Domain.Models.AlbumModels;
using Portal.Domain.Models.UserModels;

namespace Portal.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UserController : BaseApiController
    {
        private readonly IGenericRepository<User> _userRepository;
        private readonly IActivityLogService _activityLogService;

        public UserController(IUnitOfWork unitOfWork, IActivityLogService activityLogService)
        {
            _userRepository = unitOfWork.Repository<User>();
            _activityLogService = activityLogService;
        }

        [HttpGet]
        public async Task<IActionResult> GetProfile()
        {
            var identityUserId = GetIdentityUserIdByToken();
            if (string.IsNullOrEmpty(identityUserId))
            {
                return BadRequest("error_user_not_found");
            }

            var user = await _userRepository.GetByIdentityUserIdAsync(identityUserId);
            if (user == null)
            {
                return BadRequest("error_user_not_found");
            }

            // Response
            var response = new UserProfileResponse
            {
                Id = user.Id,
                Email = user.Email,
                Avatar = user.Avatar,
                FullName = user.FullName,
                UserName = user.UserName,
                LevelId = user.LevelId,
                CurrentExp = user.CurrentExp,
                NextLevelExp = user.NextLevelExp,
                RoleType = user.RoleType,
                ExpriedRoleDate = user.ExpriedRoleDate
            };

            return Ok(new ServiceResponse<UserProfileResponse>(response));
        }

        [HttpPost("activity-log")]
        public async Task<IActionResult> CreateLog(ActivityLogRequestModel model)
        {
            var identityUserId = GetIdentityUserIdByToken();
            if (string.IsNullOrEmpty(identityUserId))
                return BadRequest("error_user_not_found");

            var user = await _userRepository.GetByIdentityUserIdAsync(identityUserId);

            if (user == null)
                return BadRequest("error_user_not_found");

            model.UserId = user.Id;
            var response = await _activityLogService.CreateAsync(model);

            if (!response.IsSuccess)
                return BadRequest(response);

            return Ok(response);
        }
    }
}
