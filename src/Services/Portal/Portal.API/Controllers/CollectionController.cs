using Hangfire;
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
        private readonly IBackgroundJobClient _backgroundJobClient;

        public CollectionController(
            ICollectionService collectionService,
            IBackgroundJobClient backgroundJobClient)
        {
            _collectionService = collectionService;
            _backgroundJobClient = backgroundJobClient;
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
        public IActionResult CreateContentItems([FromRoute] int id, [FromForm] List<IFormFile> files)
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

            _backgroundJobClient.Enqueue<IContentItemService>(x => x.CreateContentItemsAsync(id, model));
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
