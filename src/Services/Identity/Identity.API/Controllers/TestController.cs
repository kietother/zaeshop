using Common.Enums;
using Common.Interfaces;
using Common.Interfaces.Messaging;
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
        private readonly IApiService _apiService;
        private readonly ISendMailPublisher _sendMailPublisher;
        #endregion

        #region ctor
        public TestController(
            IApiService apiService,
            ISendMailPublisher sendMailPublisher)
        {
            _apiService = apiService;
            _sendMailPublisher = sendMailPublisher;
        }
        #endregion

        [HttpGet("portal-grpc-get-user")]
        public async Task<IActionResult> CallApiPortalAsync()
        {
            var result = await _apiService.GetAsync<object>(EServiceHost.Portal, "/v1/users");
            return Ok(result);
        }

        [HttpPost("send-email")]
        public async Task<IActionResult> SendMailAsync(
           string subject,
           string body,
           string toEmails,
           string? ccEmails
        )
        {
            var message = new Common.Shared.Models.Emails.SendEmailMessage
            {
                Subject = subject,
                Body = body,
                ToEmails = toEmails.Split(',').ToList(),
                CcEmails = ccEmails?.Split(',').ToList()
            };
            await _sendMailPublisher.SendMailAsync(message);
            return Ok();
        }
    }
}