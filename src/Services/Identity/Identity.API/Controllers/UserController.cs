using Common.Enums;
using Identity.API.Attributes;
using Identity.Domain.Models.ErrorCodes;
using Identity.Domain.Models.ErrorResponses;
using Identity.Infrastructure;
using Identity.Infrastructure.Interfaces.Services;
using Identity.Infrastructure.Models.Users;
using Microsoft.AspNetCore.Mvc;

namespace Identity.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UserController : ControllerBase
    {
        #region fields
        private readonly IUserService _userService;
        private readonly AppIdentityDbContext _context;
        #endregion

        #region ctor
        public UserController(
            IUserService userService,
            AppIdentityDbContext context)
        {
            _userService = userService;
            _context = context;
        }
        #endregion

        [HttpPost]
        [Authorize(ERoles.Administrator)]
        public async Task<IActionResult> CreateAsync([FromBody] UserRegisterRequestModel model)
        {
            var errorResult = new ErrorResult();
            var user = await _userService.CreateAsync(model, errorResult);

            if (user == null || !string.IsNullOrEmpty(errorResult.Description))
            {
                return BadRequest(errorResult);
            }

            return Ok(user);
        }

        [HttpPut]
        [Route("{id}")]
        [Authorize(ERoles.Administrator)]
        public async Task<IActionResult> UpdateAsync(string id, [FromBody] UserUpdateRequestModel model)
        {
            var errorResult = new ErrorResult();
            var user = await _userService.UpdateAsync(id, model, errorResult);

            if (user == null || !string.IsNullOrEmpty(errorResult.Description))
            {
                return BadRequest(errorResult);
            }

            return Ok(user);
        }

        [HttpDelete]
        [Route("{id}")]
        [Authorize(ERoles.Administrator)]
        public async Task<IActionResult> DeleteAsync(string id)
        {
            var errorResult = new ErrorResult();

            // find user by id
            var user = await _userService.GetByIdAsync(id);

            // validate user
            if (user == null)
            {
                errorResult.Description = nameof(ErrorCodes.UserNotExists);
                return BadRequest(errorResult);
            }

            // delete user by user manager
            _context.Users.Remove(user);
            _context.SaveChanges();

            return Ok(user);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var users = await _userService.GetAllAsync();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAsync(string id)
        {
            var user = await _userService.GetByIdAsync(id);
            return Ok(user);
        }
    }
}