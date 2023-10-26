using Common.Models;
using Portal.Domain.AggregatesModel.AlbumAggregate;
using Portal.Domain.AggregatesModel.CollectionAggregate;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Interfaces.External;
using Portal.Domain.Models.CollectionModels;
using Portal.Domain.Models.ImageUploadModels;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Implements.Business.Services
{
    public class CollectionService : ICollectionService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IGenericRepository<Collection> _repository;
        private readonly IGenericRepository<Album> _albumRepository;
        private readonly IGenericRepository<ContentItem> _contentItemRepository;
        private readonly IAmazonS3Service _amazonS3Service;

        public CollectionService(IUnitOfWork unitOfWork, IAmazonS3Service amazonS3Service)
        {
            _unitOfWork = unitOfWork;
            _repository = unitOfWork.Repository<Collection>();
            _albumRepository = unitOfWork.Repository<Album>();
            _contentItemRepository = unitOfWork.Repository<ContentItem>();
            _amazonS3Service = amazonS3Service;
        }

        public async Task<ServiceResponse<CollectionResponseModel>> CreateAsync(CollectionRequestModel requestModel)
        {
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
                Description = requestModel.Description
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

            var isExistsTitle = await _repository.GetQueryable().AnyAsync(x => x.Title == requestModel.Title && x.AlbumId == requestModel.AlbumId);
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

        public async Task<ServiceResponse<bool>> CreateOrUpdateContentItemsAsync(int id, ContentItemRequestModel model)
        {
            if (model.Items == null || model.Items.Count == 0)
            {
                return new ServiceResponse<bool>("error_content_type_not_empty");
            }

            // Retrieve the existing collection entity by ID
            var existingCollection = await _repository.GetByIdAsync(id);
            if (existingCollection == null)
            {
                return new ServiceResponse<bool>("error_collection_not_found");
            }

            // Build and Upload to image services
            var amazonBulkUploadModels = model.Items.Select(x => new ImageUploadRequestModel
            {
                FileName = x.Name,
                ImageData = x.Data
            }).ToList();

            var result = await _amazonS3Service.BulkUploadImages(amazonBulkUploadModels, $"{existingCollection.Album?.Title}-{existingCollection.Title}");

            // Store database
            var deleteItems = new List<ContentItem>();
            var addItems = new List<ContentItem>();

            foreach (var item in existingCollection.ContentItems)
            {
                if (model.Items.Any(x => x.Name == item.Name))
                {
                    deleteItems.Add(item);
                }
            }

            addItems.AddRange(result.Select(x => new ContentItem
            {
                CollectionId = id,
                Name = x.FileName,
                DisplayUrl = x.AbsoluteUrl,
                FileName = x.RelativeUrl
            }));

            _contentItemRepository.DeleteRange(deleteItems);
            _contentItemRepository.AddRange(addItems);
            await _unitOfWork.SaveChangesAsync();

            return new ServiceResponse<bool>(true);
        }

        // Additional private methods or helper functions can be added here
    }
}
