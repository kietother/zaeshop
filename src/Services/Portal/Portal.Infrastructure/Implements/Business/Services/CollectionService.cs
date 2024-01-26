using Common;
using Common.Enums;
using Common.Interfaces;
using Common.Interfaces.Messaging;
using Common.Models;
using Common.Shared.Models.Logs;
using Common.ValueObjects;
using Microsoft.Extensions.Hosting;
using Portal.Domain.AggregatesModel.AlbumAggregate;
using Portal.Domain.AggregatesModel.CollectionAggregate;
using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.CollectionModels;
using Portal.Domain.Models.ContentItemModels;
using Portal.Domain.SeedWork;
using Portal.Infrastructure.Helpers;

namespace Portal.Infrastructure.Implements.Business.Services
{
    public class CollectionService : ICollectionService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IGenericRepository<Collection> _repository;
        private readonly IGenericRepository<Album> _albumRepository;
        private readonly IGenericRepository<ContentItem> _contentItemRepository;
        private readonly IRedisService _redisService;
        private readonly IGenericRepository<User> _userRepository;
        private readonly IServiceLogPublisher _serviceLogPublisher;
        private readonly IHostEnvironment _hostingEnvironment;

        public CollectionService(
            IUnitOfWork unitOfWork,
            IRedisService redisService,
            IServiceLogPublisher serviceLogPublisher,
            IHostEnvironment hostingEnvironment)
        {
            _unitOfWork = unitOfWork;
            _repository = unitOfWork.Repository<Collection>();
            _albumRepository = unitOfWork.Repository<Album>();
            _contentItemRepository = unitOfWork.Repository<ContentItem>();
            _redisService = redisService;
            _userRepository = unitOfWork.Repository<User>();
            _serviceLogPublisher = serviceLogPublisher;
            _hostingEnvironment = hostingEnvironment;
        }

        public async Task<ServiceResponse<CollectionResponseModel>> CreateAsync(CollectionRequestModel requestModel)
        {
            requestModel.Title = requestModel.Title.Trim();
            requestModel.Description = requestModel.Description?.Trim();
            requestModel.ExtendName = requestModel.ExtendName?.Trim();

            var existingAlbum = await _albumRepository.GetByIdAsync(requestModel.AlbumId);
            if (existingAlbum == null)
            {
                return new ServiceResponse<CollectionResponseModel>("error_album_not_found");
            }

            // Validate if the associated album exists
            var isExistsTitle = await _repository.GetQueryable().AnyAsync(x => x.Title == requestModel.Title && x.AlbumId == requestModel.AlbumId);
            if (isExistsTitle)
            {
                return new ServiceResponse<CollectionResponseModel>("error_collection_title_exists");
            }

            // Create a new collection entity
            var entity = new Collection
            {
                Title = requestModel.Title,
                AlbumId = requestModel.AlbumId,
                Volume = requestModel.Volume,
                ExtendName = requestModel.ExtendName,
                Description = requestModel.Description,
                FriendlyName = CommonHelper.GenerateFriendlyName(requestModel.Title)
            };

            // Add the entity to the repository and save changes
            _repository.Add(entity);
            await _unitOfWork.SaveChangesAsync();

            // Map the entity to the response model
            var responseModel = new CollectionResponseModel
            {
                Id = entity.Id,
                Title = entity.Title,
                AlbumId = entity.AlbumId,
                AlbumTitle = existingAlbum.Title,
                Volume = entity.Volume,
                ExtendName = entity.ExtendName,
                Description = entity.Description
                // Add other properties as needed
            };

            return new ServiceResponse<CollectionResponseModel>(responseModel);
        }

        public async Task<ServiceResponse<CollectionResponseModel>> UpdateAsync(int id, CollectionRequestModel requestModel)
        {
            requestModel.Title = requestModel.Title.Trim();
            requestModel.Description = requestModel.Description?.Trim();
            requestModel.ExtendName = requestModel.ExtendName?.Trim();

            // Retrieve the existing collection entity by ID
            var existingEntity = await _repository.GetByIdAsync(id);
            if (existingEntity == null)
            {
                return new ServiceResponse<CollectionResponseModel>("error_collection_not_found");
            }

            // Validate if the associated album exists
            var existingAlbum = await _albumRepository.GetByIdAsync(requestModel.AlbumId);
            if (existingAlbum == null)
            {
                return new ServiceResponse<CollectionResponseModel>("error_album_not_found");
            }

            var isExistsTitle = await _repository.GetQueryable().AnyAsync(x => x.Title == requestModel.Title && x.Id != id && x.AlbumId == requestModel.AlbumId);
            if (isExistsTitle)
            {
                return new ServiceResponse<CollectionResponseModel>("error_collection_title_exists");
            }

            // Update the existing collection entity properties
            existingEntity.Title = requestModel.Title;
            existingEntity.AlbumId = requestModel.AlbumId;
            existingEntity.Volume = requestModel.Volume;
            existingEntity.ExtendName = requestModel.ExtendName;
            existingEntity.Description = requestModel.Description;
            existingEntity.FriendlyName = CommonHelper.GenerateFriendlyName(requestModel.Title);

            // Update the entity in the repository and save changes
            _repository.Update(existingEntity);
            await _unitOfWork.SaveChangesAsync();

            // Map the updated entity to the response model
            var responseModel = new CollectionResponseModel
            {
                Id = existingEntity.Id,
                Title = existingEntity.Title,
                AlbumId = existingEntity.AlbumId,
                AlbumTitle = existingAlbum.Title,
                Volume = existingEntity.Volume,
                ExtendName = existingEntity.ExtendName,
                Description = existingEntity.Description
                // Add other properties as needed
            };

            return new ServiceResponse<CollectionResponseModel>(responseModel);
        }

        public async Task<ServiceResponse<List<CollectionResponseModel>>> GetAllAsync()
        {
            // Retrieve all collections from the repository
            var collections = await _repository.GetAllAsync();

            // Map the entities to the response model list
            var response = collections.Select(x => new CollectionResponseModel
            {
                Id = x.Id,
                Title = x.Title,
                AlbumId = x.AlbumId,
                AlbumTitle = x.Album.Title,
                Volume = x.Volume,
                ExtendName = x.ExtendName,
                Description = x.Description,
                // Add other properties as needed
                ContentItems = x.ContentItems?.Select(y => y.DisplayUrl).ToList()
            }).ToList();

            return new ServiceResponse<List<CollectionResponseModel>>(response);
        }

        public async Task<ServiceResponse<bool>> DeleteAsync(int id)
        {
            // Retrieve the existing collection entity by ID
            var existingEntity = await _repository.GetByIdAsync(id);
            if (existingEntity == null)
            {
                return new ServiceResponse<bool>("error_collection_not_found");
            }

            // Delete the entity from the repository and save changes
            _repository.Delete(existingEntity);
            await _unitOfWork.SaveChangesAsync();

            return new ServiceResponse<bool>(true);
        }

        public async Task<ServiceResponse<List<GetContentItemModel>>> GetContentItemsAsync(int id)
        {
            var contentItems = await _contentItemRepository.GetQueryable().Where(x => x.CollectionId == id)
                                    .Select(x => new GetContentItemModel
                                    {
                                        Id = x.Id,
                                        Name = x.Name,
                                        OrderBy = x.OrderBy,
                                        RelativeUrl = x.RelativeUrl,
                                        DisplayUrl = x.DisplayUrl,
                                        OriginalUrl = x.OriginalUrl,
                                        CreatedOnUtc = x.CreatedOnUtc,
                                        Type = x.Type
                                    }).ToListAsync();

            return new ServiceResponse<List<GetContentItemModel>>(contentItems);
        }

        // Additional private methods or helper functions can be added here
        public async Task<ServiceResponse<PagingCommonResponse<CollectionPagingResponse>>> GetPagingAsync(CollectionPagingRequest request)
        {
            var parameters = new Dictionary<string, object?>
            {
                { "PageNumber", request.PageNumber },
                { "PageSize", request.PageSize },
                { "SearchTerm", request.SearchTerm },
                { "SortColumn", request.SortColumn },
                { "SortDirection", request.SortDirection },
                { "AlbumId", request.AlbumId }
            };
            var result = await _unitOfWork.QueryAsync<CollectionPagingResponse>("Collection_All_Paging", parameters);

            var record = result.Find(o => o.IsTotalRecord);
            if (record == null)
            {
                return new ServiceResponse<PagingCommonResponse<CollectionPagingResponse>>(new PagingCommonResponse<CollectionPagingResponse>
                {
                    RowNum = 0,
                    Data = new List<CollectionPagingResponse>()
                });
            }

            result.Remove(record);
            return new ServiceResponse<PagingCommonResponse<CollectionPagingResponse>>(new PagingCommonResponse<CollectionPagingResponse>
            {
                RowNum = record.RowNum,
                Data = result
            });
        }

        public async Task AddViewFromUserToRedisAsync(CollectionViewUserBuildModel model)
        {
            bool isDeployed = bool.Parse(Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT_DEPLOYED") ?? "false");
            var prefixEnvironment = isDeployed ? "[Docker] " : string.Empty;

            try
            {
                User? user = null;
                if (!string.IsNullOrEmpty(model.IdentityUserId))
                {
                    user = await _userRepository.GetByIdentityUserIdAsync(model.IdentityUserId);
                    if (user == null)
                    {
                        // Log Error when model have user id not exists database
                        await _serviceLogPublisher.WriteLogAsync(new ServiceLogMessage
                        {
                            LogLevel = ELogLevel.Information,
                            EventName = Const.ServiceLogEventName.Error,
                            ServiceName = "Hangfire",
                            Environment = prefixEnvironment + _hostingEnvironment.EnvironmentName,
                            Description = $"User with IdentityUserId {model.IdentityUserId} not found",
                            IpAddress = model.IpAddress,
                            Request = JsonSerializationHelper.Serialize(model)
                        });
                        return;
                    }
                }

                var collection = await _repository.GetByIdAsync(model.CollectionId);
                if (collection == null)
                {
                    // Log Error when model have collection id not exists database
                    await _serviceLogPublisher.WriteLogAsync(new ServiceLogMessage
                    {
                        LogLevel = ELogLevel.Information,
                        EventName = Const.ServiceLogEventName.Error,
                        ServiceName = "Hangfire",
                        Environment = prefixEnvironment + _hostingEnvironment.EnvironmentName,
                        Description = $"Collection with id {model.CollectionId} not found",
                        IpAddress = model.IpAddress,
                        Request = JsonSerializationHelper.Serialize(model)
                    });
                    return;
                }

                // We use key ViewCount_0 -> ViewCount_50
                var key = string.Format(Const.RedisCacheKey.ViewCount, DateTime.UtcNow.Minute - (DateTime.UtcNow.Minute % 10));
                var value = await _redisService.GetAsync<List<CollectionViewModel>>(key);
                if (value == null)
                {
                    value = new List<CollectionViewModel>
                    {
                        new CollectionViewModel
                        {
                            CollectionId = model.CollectionId,
                            UserId = user?.Id,
                            SessionId = model.SessionId,
                            IpAddress = model.IpAddress,
                            CreatedOnUtc = DateTime.UtcNow
                        }
                    };

                    await _redisService.SetAsync(key, value, 59);
                }
                else
                {
                    var collectionViewByUser = value.Find(o => o.CollectionId == model.CollectionId && (
                        o.UserId == user?.Id || o.IpAddress == model.IpAddress || o.SessionId == model.SessionId
                    ));

                    if (collectionViewByUser == null)
                    {
                        value.Add(new CollectionViewModel
                        {
                            CollectionId = model.CollectionId,
                            UserId = user?.Id,
                            SessionId = model.SessionId,
                            IpAddress = model.IpAddress,
                            CreatedOnUtc = DateTime.UtcNow
                        });

                        await _redisService.SetAsync(key, value, 59);
                    }
                }
            }
            catch (Exception ex)
            {
                await _serviceLogPublisher.WriteLogAsync(new ServiceLogMessage
                {
                    LogLevel = ELogLevel.Error,
                    EventName = ex.Message,
                    StackTrace = ex.StackTrace,
                    ServiceName = "Hangfire",
                    Environment = prefixEnvironment + _hostingEnvironment.EnvironmentName,
                    Description = $"[Exception]: {ex.Message}",
                    IpAddress = model.IpAddress,
                    StatusCode = "Internal Server Error",
                    Request = JsonSerializationHelper.Serialize(model)
                });
            }
        }

        public async Task CalculateViewsFromRedisTaskAsync()
        {

        }

        private async Task CaclculateViewsFromRedisAsync()
        {

        }
    }
}
