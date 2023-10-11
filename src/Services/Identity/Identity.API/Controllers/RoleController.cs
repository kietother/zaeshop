using Common.Enums;
using Identity.API.Attributes;
using Identity.Domain.AggregatesModel.UserAggregate;
using Identity.Infrastructure.Interfaces.Services;
using Identity.Infrastructure.Models.Roles;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Identity.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class RoleController : ControllerBase
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<User> _userManager;
        private readonly IUserService _userService;

        public RoleController(
            RoleManager<IdentityRole> roleManager,
            UserManager<User> userManager,
            IUserService userService)
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _userService = userService;
        }

        [HttpGet]
        [Route("all")]
        [Authorize(ERoles.Administrator)]
        public IActionResult GetAllRoles()
        {
            var roles = _roleManager.Roles.OrderBy(r => r.Name);
            return Ok(roles);
        }

        [HttpGet]
        [Authorize(ERoles.Administrator)]
        public async Task<IActionResult> GetPagingAsync(int pageIndex = 1, int pageSize = 10)
        {
            var usersPagingResponse = await _userService.GetRolesPagingAsync(pageIndex, pageSize);
            return Ok(usersPagingResponse);
        }

        [HttpPost]
        [Authorize(ERoles.Administrator)]
        public async Task<IActionResult> CreateRole([FromBody] RoleCreateRequestModel roleRequest)
        {
            if (string.IsNullOrEmpty(roleRequest.Name))
            {
                return BadRequest("Role name cannot be empty.");
            }

            var role = new IdentityRole(roleRequest.Name);
            var result = await _roleManager.CreateAsync(role);

            if (result.Succeeded)
            {
                return Ok(role);
            }

            return BadRequest(result.Errors);
        }

        [HttpPut("{id}")]
        [Authorize(ERoles.Administrator)]
        public async Task<IActionResult> UpdateRole(string id, [FromBody] RoleUpdateRequestModel roleRequest)
        {
            var role = await _roleManager.FindByIdAsync(id);

            if (role == null)
            {
                return NotFound();
            }

            role.Name = roleRequest.Name;
            var result = await _roleManager.UpdateAsync(role);

            if (result.Succeeded)
            {
                return Ok(role);
            }

            return BadRequest(result.Errors);
        }

        [HttpDelete("{id}")]
        [Authorize(ERoles.Administrator)]
        public async Task<IActionResult> DeleteRole(string id)
        {
            var role = await _roleManager.FindByIdAsync(id);

            if (role == null)
            {
                return NotFound();
            }

            var result = await _roleManager.DeleteAsync(role);

            if (result.Succeeded)
            {
                return Ok(role);
            }

            return BadRequest(result.Errors);
        }

        #region User Roles
        [HttpGet("users/{userId}")]
        [Authorize(ERoles.User)]
        public async Task<IActionResult> GetRolesAsync(string userId)
        {
            var user = _userManager.Users.FirstOrDefault(u => u.Id == userId);
            if (user == null)
            {
                return NotFound();
            }

            var userRoles = await _userManager.GetRolesAsync(user);
            return Ok(userRoles);
        }

        [HttpPut("users/{userId}")]
        [Authorize(ERoles.Administrator)]
        public async Task<IActionResult> UpdateRoles(string userId, [FromBody] List<string> roles)
        {
            var user = _userManager.Users.FirstOrDefault(u => u.Id == userId);
            if (user == null)
            {
                return NotFound();
            }

            var allRoles = _roleManager.Roles.ToList();
            var dbRoles = allRoles.ConvertAll(o => o.Name);

            // Check roles are valid
            var isValidRoles = roles.TrueForAll(dbRoles.Contains);
            if (!isValidRoles)
            {
                return BadRequest("Roles is invalid");
            }

            var userRoles = await _userManager.GetRolesAsync(user);

            var rolesToAdd = roles.Except(userRoles);
            var rolesToRemove = userRoles.Except(roles);

            await _userManager.AddToRolesAsync(user, rolesToAdd);
            await _userManager.RemoveFromRolesAsync(user, rolesToRemove);

            return Ok(roles);
        }
        #endregion
    }
}
