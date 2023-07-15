using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hangfire;
using Microsoft.AspNetCore.Mvc;

namespace HangFireServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        private readonly IBackgroundJobClient _backgroundJobClient;

        public TestController(IBackgroundJobClient backgroundJobClient)
        {
            _backgroundJobClient = backgroundJobClient;
        }

        [HttpGet]
        [Route("hangfire")]
        public IActionResult TestHangfire(string message)
        {
            _backgroundJobClient.Enqueue(() => Console.WriteLine(message));
            return Ok();
        }
    }
}