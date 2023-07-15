using EmailHelper.Services;
using Hangfire;
using Identity.API.Attributes;
using Microsoft.AspNetCore.Mvc;

namespace Identity.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class TestController : ControllerBase
    {
        #region fields
        private readonly IEmailService _emailService;
        private readonly IBackgroundJobClient _backgroundJobClient;
        #endregion

        #region ctor
        public TestController(
            IEmailService emailService,
            IBackgroundJobClient backgroundJobClient)
        {
            _emailService = emailService;
            _backgroundJobClient = backgroundJobClient;
        }
        #endregion

        [HttpGet("send-email")]
        public IActionResult TestSendMail(string emails)
        {
            var listEmails = emails?.Split(",").ToList();

            if (listEmails?.Any() == true)
            {
                _emailService.SendMail("Test Email", "<p>Test Email</p>", listEmails);
            }

            return Ok();
        }

        [HttpGet("identity-hangfire")]
        public IActionResult TestHangFire(string message)
        {
           _backgroundJobClient.Enqueue(() => Console.WriteLine(message));
            return Ok();
        }
    }
}