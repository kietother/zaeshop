using Common.Models;
using Microsoft.AspNetCore.Mvc;
using Portal.API.Attributes;
using Portal.Domain.AggregatesModel.CollectionAggregate;
using Portal.Domain.Models.CollectionModels;

namespace Portal.API.Controllers
{
    [ApiController]
    [Route("api/client/[controller]")]
    [AllowAnonymous]
    public class ContentAppController : ControllerBase
    {

        private readonly IGenericRepository<Collection> _collectionRepository;

        public ContentAppController(IUnitOfWork unitOfWork)
        {
            _collectionRepository = unitOfWork.Repository<Collection>();
        }

        [HttpGet("{friendlyName}")]
        public async Task<IActionResult> GetByIdAsync(string friendlyName)
        {
            var collection = await _collectionRepository.GetQueryable().FirstOrDefaultAsync(o => o.FriendlyName == friendlyName);
            if (collection == null)
            {
                return BadRequest(new ServiceResponse<ContentAppModel>("Không tìm thấy chap truyện tranh"));
            }
            var result = new ServiceResponse<ContentAppModel>(new ContentAppModel
            {
                Id = collection.Id,
                Title = collection.Title,
                FriendlyName = collection.FriendlyName,
                CreatedDate = collection.CreatedOnUtc,
                UpdatedDate = collection.UpdatedOnUtc,
                IsPublic = collection.IsPublic,
                AlbumId = collection.AlbumId,
                AlbumTitle = collection.Album?.Title,
                Description = collection.Description,
                ExtendName = collection.ExtendName,
                Volume = collection.Volume,
                // Add other properties as needed
                ContentItems = collection.ContentItems?.Select(y => y.DisplayUrl).ToList()
            });
            return Ok(result);
        }
    }
}
