using System.Security.Claims;
using Common.Interfaces;
using Common.Models;
using Common.ValueObjects;
using Hangfire;
using Microsoft.AspNetCore.Mvc;
using Portal.API.Attributes;
using Portal.Domain.AggregatesModel.AlbumAggregate;
using Portal.Domain.AggregatesModel.CollectionAggregate;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.CollectionModels;

namespace Portal.API.Controllers
{
    [ApiController]
    [Route("api/client/[controller]")]
    [AllowAnonymous]
    public class ContentAppController : BaseApiController
    {
        private readonly IGenericRepository<Collection> _collectionRepository;
        private readonly IGenericRepository<Album> _albumRepository;
        private readonly IBackgroundJobClient _backgroundJobClient;
        private readonly IRedisService _redisService;

        public ContentAppController(IUnitOfWork unitOfWork, IBackgroundJobClient backgroundJobClient, IRedisService redisService)
        {
            _collectionRepository = unitOfWork.Repository<Collection>();
            _albumRepository = unitOfWork.Repository<Album>();
            _backgroundJobClient = backgroundJobClient;
            _redisService = redisService;
        }

        [HttpGet("comics/{comicFriendlyName}/contents/{contentFriendlyName}")]
        public async Task<IActionResult> GetByIdAsync(string comicFriendlyName, string contentFriendlyName)
        {
            #region Using cache if exists
            var value = await _redisService.GetAsync<ContentAppModel>(string.Format(Const.RedisCacheKey.ComicContent, comicFriendlyName, contentFriendlyName));
            if (value != null)
            {
                // Hangfire
                _backgroundJobClient.Enqueue<ICollectionService>(x => x.AddViewFromUserToRedisAsync(new CollectionViewUserBuildModel
                {
                    CollectionId = value!.Id,
                    IdentityUserId = User.FindFirstValue("id"),
                    AtViewedOnUtc = DateTime.UtcNow,
                    IpAddress = IpAddress(),
                    SessionId = HttpContext.Session.Id
                }));

                return Ok(new ServiceResponse<ContentAppModel>(value));
            }
            #endregion

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
            await _redisService.SetAsync(string.Format(Const.RedisCacheKey.ComicContent, comicFriendlyName, contentFriendlyName), result.Data, 5);

            #region Hangfire Enqueue Background
            _backgroundJobClient.Enqueue<ICollectionService>(x => x.AddViewFromUserToRedisAsync(new CollectionViewUserBuildModel
            {
                CollectionId = result.Data!.Id,
                IdentityUserId = User.FindFirstValue("id"),
                AtViewedOnUtc = DateTime.UtcNow,
                IpAddress = IpAddress(),
                SessionId = HttpContext.Session.Id
            }));
            #endregion

            return Ok(result);
        }
    }
}
