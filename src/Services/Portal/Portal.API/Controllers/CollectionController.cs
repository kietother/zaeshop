using Microsoft.AspNetCore.Mvc;
using Portal.API.Attributes;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.CollectionModels;

namespace Portal.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class CollectionController : ControllerBase
    {
        private readonly ICollectionService _collectionService;

        public CollectionController(ICollectionService collectionService)
        {
            _collectionService = collectionService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CollectionRequestModel model)
        {
            var result = await _collectionService.CreateAsync(model);
            if (!result.IsSuccess)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(int id, CollectionRequestModel model)
        {
            var result = await _collectionService.UpdateAsync(id, model);
            if (!result.IsSuccess)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _collectionService.GetAllAsync();
            if (!result.IsSuccess)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _collectionService.DeleteAsync(id);
            if (!result.IsSuccess)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpPost]
        [Route("{id}/content-items")]
        [RequestSizeLimit(1024 * 1024)]
        public async Task<IActionResult> CreateOrUpdateContentItemsAsync([FromRoute] int id, [FromForm] List<IFormFile> files)
        {
            // Validate and get data
            var model = new ContentItemRequestModel
            {
                Items = new List<ContentItemRequestDetailModel>()
            };

            foreach (var file in files)
            {
                var fileName = file.FileName;
                var fileBytes = GetFileBytes(file);

                model.Items.Add(new ContentItemRequestDetailModel
                {
                    Name = fileName,
                    Data = fileBytes
                });
            }

            var result = await _collectionService.CreateContentItemsAsync(id, model);
            if (!result.IsSuccess)
            {
                return BadRequest("error_server_upload_images_not_sucessfully");
            }

            return Ok();
        }

        private static byte[] GetFileBytes(IFormFile file)
        {
            using var ms = new MemoryStream();
            file.CopyTo(ms);
            return ms.ToArray();
        }
    }
}
