using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmailHelper.Services;
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
        #endregion

        #region ctor
        public TestController(IEmailService     emailService)
        {
            _emailService = emailService;
        }
        #endregion

        [HttpGet("send-email")]
        public IActionResult TestSendMail(string emails)
        {
            var listEmails = emails?.Split(",").ToList();

            if (listEmails?.Any() == true)
            {
                _emailService.SendMail("Test Email","<p>Test Email</p>", listEmails);
            }

            return Ok();
        }
    }
}