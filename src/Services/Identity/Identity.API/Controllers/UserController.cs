using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Identity.API.Attributes;
using Identity.Domain.AggregatesModel.UserAggregate;
using Identity.Domain.POCOs.ErrorResponses;
using Identity.Infrastructure.Interfaces.Services;
using Identity.Infrastructure.Models.Users;
using Microsoft.AspNetCore.Identity;
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
        #endregion

        #region ctor
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        #endregion

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> CreateAsync([FromBody] UserRegisterRequestModel model)
        {
            var errorResult = new ErrorResult();
            var user = await _userService.CreateAsync(model, null, errorResult);

            if (user == null || !string.IsNullOrEmpty(errorResult.Description))
            {
                return BadRequest(errorResult);
            }

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