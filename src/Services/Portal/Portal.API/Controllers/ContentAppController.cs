using Common.Models;
using Microsoft.AspNetCore.Mvc;
using Portal.API.Attributes;
using Portal.Domain.AggregatesModel.AlbumAggregate;
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
        private readonly IGenericRepository<Album> _albumRepository;

        public ContentAppController(IUnitOfWork unitOfWork)
        {
            _collectionRepository = unitOfWork.Repository<Collection>();
            _albumRepository = unitOfWork.Repository<Album>();
        }

        [HttpGet("comics/{comicFriendlyName}/contents/{contentFriendlyName}")]
        [RedisCache(5)]
        public async Task<IActionResult> GetByIdAsync(string comicFriendlyName, string contentFriendlyName)
        {
            var album = await _albumRepository.GetQueryable().FirstOrDefaultAsync(o => o.FriendlyName == comicFriendlyName);
            if (album == null)
            {
                return BadRequest(new ServiceResponse<ContentAppModel>("Không tìm thấy truyện tranh"));
            }

            var collection = await _collectionRepository.GetQueryable().FirstOrDefaultAsync(o => o.AlbumId == album.Id && o.FriendlyName == contentFriendlyName);
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
                AlbumFriendlyName = collection.Album?.FriendlyName,
                Description = collection.Description,
                ExtendName = collection.ExtendName,
                Volume = collection.Volume,
                // Add other properties as needed
                ContentItems = collection.ContentItems?.OrderByDescending(x => x.OrderBy).Select(y => y.DisplayUrl).ToList()
            });
            return Ok(result);
        }
    }
}
