using Common.Models;
using Microsoft.AspNetCore.Mvc;
using Portal.API.Attributes;
using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.Enums;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.ActivityLogs;
using Portal.Domain.Models.UserModels;

namespace Portal.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : BaseApiController
    {
        private readonly IGenericRepository<User> _userRepository;
        private readonly IActivityLogService _activityLogService;
        private readonly IUserService _userService;

        public UserController(IUnitOfWork unitOfWork, IActivityLogService activityLogService, IUserService userService)
        {
            _userRepository = unitOfWork.Repository<User>();
            _activityLogService = activityLogService;
            _userService = userService;
        }

        [HttpGet]
        [Authorize]
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
        [Authorize]
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

        [HttpGet("ranking")]
        public async Task<IActionResult> GetPagingAsync([FromQuery] ERegion region)
        {
            var request = new PagingCommonRequest()
            {
                PageNumber = 1,
                PageSize = 10,
                SearchTerm = "",
                SortColumn = "",
                SortDirection = ""
            };

            var response = await _userService.GetPagingAsync(request, region);

            if (!response.IsSuccess)
                return BadRequest(response);

            return Ok(response);
        }
    }
}
