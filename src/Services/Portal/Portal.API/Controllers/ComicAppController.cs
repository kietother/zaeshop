using Common;
using Common.Models;
using Microsoft.AspNetCore.Mvc;
using Portal.API.Attributes;
using Portal.Domain.AggregatesModel.AlbumAggregate;
using Portal.Domain.Models.AlbumModels;
using Portal.Domain.Models.CollectionModels;

namespace Portal.API.Controllers
{
    [ApiController]
    [Route("api/client/[controller]")]
    [AllowAnonymous]
    public class ComicAppController : ControllerBase
    {
        private readonly IGenericRepository<Album> _albumRepository;

        public ComicAppController(IUnitOfWork unitOfWork)
        {
            _albumRepository = unitOfWork.Repository<Album>();
        }

        [HttpGet]
        [RedisCache(5)]
        public async Task<IActionResult> GetAsync()
        {
            var comics = await _albumRepository.GetAllAsync();
            var result = new ServiceResponse<List<ComicAppModel>>(comics.ConvertAll(x => new ComicAppModel
            {
                Id = x.Id,
                Title = x.Title,
                FriendlyName = x.FriendlyName,
                Description = x.Description,
                AlbumAlertMessageName = x.AlbumAlertMessage?.Name,
                ContentTypeNames = x.AlbumContentTypes?.Where(y => !string.IsNullOrEmpty(y.ContentType?.Name)).Select(y => y.ContentType.Name).OrderBy(o => o).JoinSeparator(),
                IsPublic = x.IsPublic,
                CreatedDate = x.CreatedOnUtc,
                UpdatedDate = x.UpdatedOnUtc,
                CdnThumbnailUrl = x.CdnThumbnailUrl,
                Views = x.Views,
                Contents = x.Collections.OrderByDescending(y => y.Title).Take(5).Select(z => new ContentAppModel
                {
                    Id = z.Id,
                    Title = z.Title,
                    FriendlyName = z.FriendlyName,
                    CreatedDate = z.CreatedOnUtc,
                    UpdatedDate = z.UpdatedOnUtc,
                    IsPublic = z.IsPublic,
                    AlbumId = z.AlbumId,
                    AlbumTitle = x.Title,
                    AlbumFriendlyName = x.FriendlyName,
                    Description = z.Description,
                    ExtendName = z.ExtendName,
                    Volume = z.Volume
                }).ToList()
            }));

            return Ok(result);
        }

        [HttpGet("{friendlyName}")]
        [RedisCache(5)]
        public async Task<IActionResult> GetByIdAsync(string friendlyName)
        {
            var comic = await _albumRepository.GetQueryable().FirstOrDefaultAsync(o => o.FriendlyName == friendlyName);
            if (comic == null)
            {
                return BadRequest(new ServiceResponse<ComicAppModel>("Không tìm thấy truyện tranh"));
            }
            var result = new ServiceResponse<ComicAppModel>(new ComicAppModel
            {
                Id = comic.Id,
                Title = comic.Title,
                FriendlyName = comic.FriendlyName,
                Description = comic.Description,
                AlbumAlertMessageName = comic.AlbumAlertMessage?.Name,
                ContentTypeNames = comic.AlbumContentTypes?.Where(y => !string.IsNullOrEmpty(y.ContentType?.Name)).Select(y => y.ContentType.Name).OrderBy(o => o).JoinSeparator(),
                IsPublic = comic.IsPublic,
                CreatedDate = comic.CreatedOnUtc,
                UpdatedDate = comic.UpdatedOnUtc,
                AlternativeName = comic.AlternativeName,
                Type = comic.Type,
                AlbumStatus = comic.AlbumStatus,
                ReleaseYear = comic.ReleaseYear,
                AuthorNames = comic.AuthorNames,
                ArtitstNames = comic.ArtitstNames,
                Tags = comic.Tags,
                ThumbnailUrl = comic.CdnThumbnailUrl,
                Contents = comic.Collections.Select(z => new ContentAppModel
                {
                    Id = z.Id,
                    Title = z.Title,
                    FriendlyName = z.FriendlyName,
                    CreatedDate = z.CreatedOnUtc,
                    UpdatedDate = z.UpdatedOnUtc,
                    IsPublic = z.IsPublic,
                    AlbumId = z.AlbumId,
                    AlbumTitle = comic.Title,
                    AlbumFriendlyName = comic.FriendlyName
                }).OrderByDescending(x => RegexHelper.GetChapterNumber(x.Title)).ToList()
            });

            return Ok(result);
        }
    }
}
