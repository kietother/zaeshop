using Common.Models;
using Portal.Domain.AggregatesModel.CollectionAggregate;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Interfaces.External;
using Portal.Domain.Models.CollectionModels;
using Portal.Domain.Models.ImageUploadModels;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Implements.Business.Services
{
    public class ContentItemService : IContentItemService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IGenericRepository<Collection> _collectionRepository;
        private readonly IGenericRepository<ContentItem> _contentItemRepository;
        private readonly IAmazonS3Service _amazonS3Service;

        public ContentItemService(
            IUnitOfWork unitOfWork,
            IAmazonS3Service amazonS3Service)
        {
            _unitOfWork = unitOfWork;
            _contentItemRepository = unitOfWork.Repository<ContentItem>();
            _collectionRepository = unitOfWork.Repository<Collection>();
            _amazonS3Service = amazonS3Service;
        }

        public async Task<ServiceResponse<bool>> CreateContentItemsAsync(int id, ContentItemRequestModel model)
        {
            if (model.Items == null || model.Items.Count == 0)
            {
                return new ServiceResponse<bool>("error_content_type_not_empty");
            }

            // Retrieve the existing collection entity by ID
            var existingCollection = await _collectionRepository.GetByIdAsync(id);
            if (existingCollection == null)
            {
                return new ServiceResponse<bool>("error_collection_not_found");
            }

            // Check if Collection has any content item, that should be update instead create
            var isExistingContentItems = existingCollection.ContentItems.Any();
            if (isExistingContentItems)
            {
                return new ServiceResponse<bool>("error_content_type_not_empty");
            }

            // Build and Upload to image services
            var amazonBulkUploadModels = model.Items.ConvertAll(x => new ImageUploadRequestModel
            {
                FileName = x.Name,
                ImageData = x.Data
            }).ToList();

            var result = await _amazonS3Service.BulkUploadImages(amazonBulkUploadModels, $"{existingCollection.Album.Title}/{existingCollection.Title}");

            // Store database
            var addItems = result.Select((x, index) => new ContentItem
            {
                CollectionId = id,
                Name = x.FileName,
                OriginalUrl = x.AbsoluteUrl,
                DisplayUrl = x.AbsoluteUrl,
                RelativeUrl = x.RelativeUrl,
                OrderBy = index
            }).OrderBy(x => x.OrderBy).ToList();

            _contentItemRepository.AddRange(addItems);
            await _unitOfWork.SaveChangesAsync();

            return new ServiceResponse<bool>(true);
        }
    }
}
