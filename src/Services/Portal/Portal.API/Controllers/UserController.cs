using Common.Models;
using Microsoft.AspNetCore.Mvc;
using Portal.API.Attributes;
using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.Models.UserModels;

namespace Portal.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UserController : BaseApiController
    {
        private readonly IGenericRepository<User> _userRepository;

        public UserController(IUnitOfWork unitOfWork)
        {
            _userRepository = unitOfWork.Repository<User>();
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
    }
}
