using Common;
using Common.Models;
using Portal.Domain.AggregatesModel.AlbumAggregate;
using Portal.Domain.AggregatesModel.CollectionAggregate;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.CollectionModels;
using Portal.Domain.Models.ContentItemModels;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Implements.Business.Services
{
    public class CollectionService : ICollectionService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IGenericRepository<Collection> _repository;
        private readonly IGenericRepository<Album> _albumRepository;
        private readonly IGenericRepository<ContentItem> _contentItemRepository;

        public CollectionService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _repository = unitOfWork.Repository<Collection>();
            _albumRepository = unitOfWork.Repository<Album>();
            _contentItemRepository = unitOfWork.Repository<ContentItem>();
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
    }
}
