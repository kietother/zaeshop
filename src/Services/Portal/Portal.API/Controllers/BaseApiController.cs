using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;

namespace Portal.API.Controllers
{
    public class BaseApiController : ControllerBase
    {
        [NonAction]
        public string? GetIdentityUserIdByToken()
        {
            var identityUserId = User.FindFirstValue("id");
            return identityUserId;
        }
    }
}
