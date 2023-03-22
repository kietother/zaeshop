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
        [HttpGet]
        [Route("hangfire")]
        public IActionResult TestHangfire()
        {
            BackgroundJob.Enqueue(() => Console.WriteLine("Hello world !"));
            return Ok();
        }
    }
}