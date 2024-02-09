using Microsoft.AspNetCore.Mvc;
using Portal.API.Attributes;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.ContentTypeModels;

namespace Portal.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class ContentTypeController : ControllerBase
    {
        private readonly IContentTypeService _contentTypeService;

        public ContentTypeController(IContentTypeService contentTypeService)
        {
            _contentTypeService = contentTypeService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(ContentTypeRequestModel model)
        {
            var result = await _contentTypeService.CreateAsync(model);
            if (!result.IsSuccess)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(int id, ContentTypeRequestModel model)
        {
            var result = await _contentTypeService.UpdateAsync(id, model);
            if (!result.IsSuccess)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("all")]
        [AllowAnonymous]
        [RedisCache(5)]
        public async Task<IActionResult> GetAll([FromQuery] string region)
        {
            var result = await _contentTypeService.GetAllAsync(region);
            return Ok(result);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _contentTypeService.DeleteAsync(id);
            if (!result.IsSuccess)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}
