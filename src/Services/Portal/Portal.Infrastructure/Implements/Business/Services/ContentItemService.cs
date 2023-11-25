using Common.Models;
using Portal.Domain.AggregatesModel.CollectionAggregate;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Interfaces.External;
using Portal.Domain.Models.CollectionModels;
using Portal.Domain.Models.ContentItemModels;
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

        public async Task<ServiceResponse<bool>> CreateContentItemsAsync(int collectionId, ContentItemRequestModel model)
        {
            if (model.Items == null || model.Items.Count == 0)
            {
                return new ServiceResponse<bool>("error_content_type_not_empty");
            }

            // Retrieve the existing collection entity by ID
            var existingCollection = await _collectionRepository.GetByIdAsync(collectionId);
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

            var result = await _amazonS3Service.BulkUploadImagesAsync(amazonBulkUploadModels, $"{existingCollection.Album.Title}/{existingCollection.Title}");

            // Store database
            var addItems = result.Select((x, index) => new ContentItem
            {
                CollectionId = collectionId,
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

        public async Task<ServiceResponse<bool>> UpdateContentItemsAsync(int collectionId, ContentItemUpdateRequestModel model)
        {
            var createContentItems = new List<ContentItem>();
            var updateContentItems = new List<ContentItem>();
            var deleteContentItems = new List<ContentItem>();

            // Retrieve the existing collection entity by ID
            var existingCollection = await _collectionRepository.GetByIdAsync(collectionId);
            if (existingCollection == null)
            {
                return new ServiceResponse<bool>("error_collection_not_found");
            }

            // Check when new collection - before create then update
            var contentItems = await _contentItemRepository.GetQueryable().Where(x => x.CollectionId == collectionId).ToListAsync();
            if (contentItems == null || contentItems.Count == 0)
            {
                return new ServiceResponse<bool>("error_content_type_empty");
            }

            // Update exists content item by id
            if (model.ExistsItems?.Count > 0)
            {
                foreach (var item in model.ExistsItems)
                {
                    var contentItem = contentItems.Find(x => x.Id == item.Id);
                    if (contentItem != null)
                    {
                        contentItem.OrderBy = item.OrderBy;
                        updateContentItems.Add(contentItem);
                    }
                }

                // Content are not longer use, we will remove them
                var existingContentItemIds = updateContentItems.ConvertAll(x => x.Id);
                deleteContentItems.AddRange(contentItems.Where(x => !existingContentItemIds.Contains(x.Id)));
            }
            else
            {
                deleteContentItems.AddRange(contentItems);
            }

            // Build and Upload to image services
            if (model.Items?.Count > 0)
            {
                var amazonBulkUploadModels = model.Items.Where(o => !string.IsNullOrEmpty(o.FileName) && o.FileData != null).Select(x => new ImageUploadRequestModel
                {
                    FileName = x.FileName!,
                    ImageData = x.FileData!,
                    OrderBy = x.OrderBy,
                    IsPublic = x.IsPublic
                }).ToList();

                var result = await _amazonS3Service.BulkUploadImagesAsync(amazonBulkUploadModels, $"{existingCollection.Album.Title}/{existingCollection.Title}");
                foreach (var newItem in result)
                {
                    var contentItem = contentItems.Find(x => x.Name == newItem.FileName);
                    if (contentItem != null)
                    {
                        contentItem.Name = newItem.FileName;
                        contentItem.OriginalUrl = newItem.AbsoluteUrl;
                        contentItem.DisplayUrl = newItem.AbsoluteUrl;
                        contentItem.RelativeUrl = newItem.RelativeUrl;
                        contentItem.OrderBy = newItem.OrderBy;

                        updateContentItems.Add(contentItem);
                    }
                    else
                    {
                        createContentItems.Add(new ContentItem
                        {
                            CollectionId = collectionId,
                            Name = newItem.FileName,
                            OriginalUrl = newItem.AbsoluteUrl,
                            DisplayUrl = newItem.AbsoluteUrl,
                            RelativeUrl = newItem.RelativeUrl,
                            OrderBy = newItem.OrderBy
                        });
                    }
                }
            }

            _contentItemRepository.DeleteRange(deleteContentItems);

            if (updateContentItems.Count > 0)
            {
                _contentItemRepository.UpdateRange(updateContentItems);
            }

            if (createContentItems.Count > 0)
            {
                _contentItemRepository.AddRange(createContentItems);
            }

            await _unitOfWork.SaveChangesAsync();
            return new ServiceResponse<bool>(true);
        }
    }
}
