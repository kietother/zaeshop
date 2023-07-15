using Microsoft.AspNetCore.Mvc;
using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.SeedWork;

namespace Portal.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public TestController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        [Route("users")]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _unitOfWork.Repository<User>().GetAllAsync();
            return Ok(users);
        }

        [HttpGet]
        [Route("users-mapping")]
        public async Task<IActionResult> GetUserMapping()
        {
            var users = await _unitOfWork.Repository<User>().GetQueryable()
                .Filter(o => o.Id == 1)
                .Project(x => new { x.FullName, x.IdentityUserId })
                .ToListAsync();
            return Ok(users);
        }
    }
}
