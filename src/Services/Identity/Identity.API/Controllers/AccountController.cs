using Identity.API.Attributes;
using Identity.Domain.Models.ErrorResponses;
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
        private readonly IAccountService _accountService;
        private readonly IUserService _userService;

        public AccountController(
            IAccountService accountService,
            IUserService userService)
        {
            _accountService = accountService;
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> AuthenticateAsync(AuthenticateRequest model)
        {
            var ipAddress = IpAddress() ?? string.Empty;
            var response = await _accountService.AuthenticateAsync(model, ipAddress);

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
            var ipAddress = IpAddress() ?? string.Empty;
            var refreshToken = Request.Cookies["refreshToken"];
            if (string.IsNullOrEmpty(refreshToken))
            {
                return Unauthorized("INVALID_TOKEN");
            }

            var response = await _accountService.RefreshTokenAsync(refreshToken, ipAddress);
            SetTokenCookie(response.RefreshToken, Convert.ToString(response.ExpiresOnUtc));
            return Ok(response);
        }

        [HttpPost("revoke-token")]
        public async Task<IActionResult> RevokeTokenAsync(RevokeTokenRequest model)
        {
            var ipAddress = IpAddress() ?? string.Empty;
            // accept refresh token in request body or cookie
            var token = model.Token ?? Request.Cookies["refreshToken"];

            if (string.IsNullOrEmpty(token))
                return BadRequest(new { message = "Token is required" });

            await _accountService.RevokeTokenAsync(token, ipAddress);
            return Ok(new { message = "Token revoked" });
        }

        [HttpGet("{id}/refresh-tokens")]
        public async Task<IActionResult> GetRefreshTokensAsync(string id)
        {
            var user = await _userService.GetByIdAsync(id);
            if (user == null)
                return NotFound();
            return Ok(user.UserTokens);
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> RegisterAsync([FromBody] UserRegisterRequestModel model)
        {
            if (!model.IsAcceptTerm)
            {
                return BadRequest(new { message = "Accept Term is enabled." });
            }

            var errorResult = new ErrorResult();
            var userResponse = await _accountService.RegisterAsync(model, errorResult);

            if (userResponse == null || !string.IsNullOrEmpty(errorResult.Description))
            {
                return BadRequest(errorResult);
            }
            return Ok(userResponse);
        }

        [HttpGet("verify-email")]
        [AllowAnonymous]
        public async Task<IActionResult> VerifyEmailAsync([FromQuery] VerifyEmailRequest model)
        {
            var errorResult = ErrorResult.Create();
            var ipAddress = IpAddress() ?? string.Empty;
            var userResponse = await _accountService.VerifyEmailAsync(model.Token, ipAddress, errorResult);

            if (userResponse == null || !string.IsNullOrEmpty(errorResult.Description))
            {
                return BadRequest(errorResult);
            }

            SetTokenCookie(userResponse.RefreshToken, Convert.ToString(userResponse.ExpiresOnUtc));
            return Ok(new { message = "Verification successful, you can now login", userResponse });
        }

        [HttpPost("forgot-password")]
        [AllowAnonymous]
        public async Task<IActionResult> ForgotPasswordAsync(ForgotPasswordRequest model)
        {
            var errorResult = ErrorResult.Create();
            var origin = Request.Headers["origin"].ToString();
            await _accountService.ForgotPasswordAsync(model, origin, errorResult);

            if (!string.IsNullOrEmpty(errorResult.Description))
            {
                return BadRequest(errorResult.Description);
            }

            return Ok(new { message = "Please check your email for password reset instructions" });
        }

        [HttpPost("validate-reset-token")]
        [AllowAnonymous]
        public async Task<IActionResult> ValidateResetTokenAsync(ValidateResetTokenRequest model)
        {
            var errorResult = ErrorResult.Create();
            await _accountService.ValidateResetTokenAsync(model, errorResult);

            if (!string.IsNullOrEmpty(errorResult.Description))
            {
                return BadRequest(errorResult.Description);
            }

            return Ok(new { message = "Token is valid" });
        }

        [HttpPost("reset-password")]
        [AllowAnonymous]
        public async Task<IActionResult> ResetPasswordAsync(ResetPasswordRequest model)
        {
            var errorResult = ErrorResult.Create();
            var ipAddress = IpAddress();
            var userResponse = await _accountService.ResetPasswordAsync(model, ipAddress ?? string.Empty, errorResult);

            if (userResponse == null || !string.IsNullOrEmpty(errorResult.Description))
            {
                return BadRequest(errorResult.Description);
            }
            SetTokenCookie(userResponse.RefreshToken, Convert.ToString(userResponse.ExpiresOnUtc));
            return Ok(new { message = "Password reset successful, you can now login", userResponse });
        }

        #region Private Methods
        private void SetTokenCookie(string? token, string? expiresOnUtc)
        {
            // append cookie with refresh token to the http response
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = DateTime.UtcNow.AddDays(7),
                Secure = true
            };
            Response.Cookies.Append("refreshToken", token ?? string.Empty, cookieOptions);
            Response.Cookies.Append("refreshTokenExpiresOnUtc", expiresOnUtc ?? string.Empty, cookieOptions);
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