using Microsoft.AspNetCore.Mvc;
using Portal.API.Attributes;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.ContentTypeModels;

namespace Portal.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
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
            var result = await _contentTypeService.CreateContentTypeAsync(model);
            return Ok(result);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(int id, ContentTypeRequestModel model)
        {
            var result = await _contentTypeService.UpdateContentTypeAsync(id, model);
            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _contentTypeService.GetAllContentTypesAsync();
            return Ok(result);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _contentTypeService.DeleteContentTypeAsync(id);
            return Ok(result);
        }
    }
}
