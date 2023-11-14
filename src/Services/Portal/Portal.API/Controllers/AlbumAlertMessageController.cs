using Microsoft.AspNetCore.Mvc;
using Portal.API.Attributes;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.AlbumAlertMessageModels;

namespace Portal.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class AlbumAlertMessageController : ControllerBase
    {
        private readonly IAlbumAlertMessageService _service;

        public AlbumAlertMessageController(IAlbumAlertMessageService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Create(AlbumAlertMessageRequestModel model)
        {
            var response = await _service.CreateAsync(model);

            if (!response.IsSuccess)
                return BadRequest(response);

            return Ok(response);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, AlbumAlertMessageRequestModel model)
        {
            var response = await _service.UpdateAsync(id, model);

            if (!response.IsSuccess)
                return BadRequest(response);

            return Ok(response);
        }

        [HttpGet("all")]
        [RedisCache(5)]
        public async Task<IActionResult> GetAll()
        {
            var response = await _service.GetAllAsync();

            if (!response.IsSuccess)
                return BadRequest(response);

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var response = await _service.DeleteAsync(id);

            if (!response.IsSuccess)
                return BadRequest(response);

            return Ok(response);
        }
    }
}