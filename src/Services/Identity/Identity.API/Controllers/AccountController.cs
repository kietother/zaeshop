using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Identity.API.Attributes;
using Identity.Domain.POCOs.ErrorResponses;
using Identity.Infrastructure.Interfaces.Services;
using Identity.Infrastructure.Models.Authenticates;
using Identity.Infrastructure.Models.Users;
using Microsoft.AspNetCore.Mvc;

namespace Identity.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class AccountController : ControllerBase
    {
        private readonly IUserService _userService;

        public AccountController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> AuthenticateAsync(AuthenticateRequest model)
        {
            var ipAddress = IpAddress();
            var response = await _userService.AuthenticateAsync(model, ipAddress);

            if (response == null || !string.IsNullOrEmpty(response.ErrorResult))
            {
                return Unauthorized();
            }

            SetTokenCookie(response.RefreshToken, Convert.ToString(response.ExpiresOnUtc));
            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("refresh-token")]
        public async Task<IActionResult> RefreshTokenAsync()
        {
            var refreshToken = Request.Cookies["refreshToken"];
            var response = await _userService.RefreshTokenAsync(refreshToken, IpAddress());
            SetTokenCookie(response.RefreshToken, Convert.ToString(response.ExpiresOnUtc));
            return Ok(response);
        }

        [HttpPost("revoke-token")]
        public async Task<IActionResult> RevokeTokenAsync(RevokeTokenRequest model)
        {
            // accept refresh token in request body or cookie
            var token = model.Token ?? Request.Cookies["refreshToken"];

            if (string.IsNullOrEmpty(token))
                return BadRequest(new { message = "Token is required" });

            await _userService.RevokeTokenAsync(token, IpAddress());
            return Ok(new { message = "Token revoked" });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterRequestModel model)
        {
            if (model.IsAcceptTerm)
            {
                return BadRequest(new { message = "Accept Term is required" });
            }

            var errorResult = new ErrorResult();
            var ipAddress = IpAddress();

            var userResponse = await _userService.CreateAsync(model, ipAddress, errorResult);

            if (userResponse == null || !string.IsNullOrEmpty(errorResult.Description))
            {
                return BadRequest(errorResult);
            }

            SetTokenCookie(userResponse.RefreshToken, Convert.ToString(userResponse.ExpiresOnUtc));
            return Ok(userResponse);
        }

        [HttpGet("{id}/refresh-tokens")]
        public async Task<IActionResult> GetRefreshTokensAsync(string id)
        {
            var user = await _userService.GetByIdAsync(id);
            if (user == null)
                return NotFound();
            return Ok(user.UserTokens);
        }

        #region Private Methods
        private void SetTokenCookie(string? token, string? expiresOnUtc)
        {
            // append cookie with refresh token to the http response
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = DateTime.UtcNow.AddDays(7)
            };
            Response.Cookies.Append("refreshToken", token, cookieOptions);
            Response.Cookies.Append("refreshTokenExpiresOnUtc", expiresOnUtc, cookieOptions);
        }

        private string? IpAddress()
        {
            // get source ip address for the current request
            if (Request.Headers.ContainsKey("X-Forwarded-For"))
                return Request.Headers["X-Forwarded-For"];
            else
                return HttpContext.Connection.RemoteIpAddress?.MapToIPv4().ToString();
        }
        #endregion
    }
}