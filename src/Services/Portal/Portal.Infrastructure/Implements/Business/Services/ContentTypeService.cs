using Common.Models;
using Portal.Domain.AggregatesModel.AlbumAggregate;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.ContentTypeModels;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Implements.Business.Services
{
    public class ContentTypeService : IContentTypeService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IGenericRepository<ContentType> _contentTypeRepository;

        public ContentTypeService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _contentTypeRepository = unitOfWork.Repository<ContentType>();
        }

        public async Task<ServiceResponse<ContentTypeResponseModel>> CreateContentTypeAsync(ContentTypeRequestModel request)
        {
            // Validate
            var existsContentType = await _contentTypeRepository.GetQueryable().AnyAsync(o => o.Name == request.Name);
            if (existsContentType)
            {
                return new ServiceResponse<ContentTypeResponseModel>("error_content_type_is_exists");
            }

            var contentType = new ContentType
            {
                Name = request.Name,
                Description = request.Description
            };

            // Save logic
            _contentTypeRepository.Add(contentType);
            await _unitOfWork.SaveChangesAsync();

            var response = new ContentTypeResponseModel
            {
                Id = contentType.Id,
                Name = contentType.Name,
                Description = contentType.Description
            };

            return new ServiceResponse<ContentTypeResponseModel>(response);
        }

        // Update
        public async Task<ServiceResponse<ContentTypeResponseModel>> UpdateContentTypeAsync(int id, ContentTypeRequestModel request)
        {
            var contentType = await _contentTypeRepository.GetByIdAsync(id);

            if (contentType == null)
            {
                return new ServiceResponse<ContentTypeResponseModel>("error_content_type_not_found");
            }

            contentType.Name = request.Name;
            contentType.Description = request.Description;

            _contentTypeRepository.Update(contentType);
            await _unitOfWork.SaveChangesAsync();

            var response = new ContentTypeResponseModel
            {
                Id = contentType.Id,
                Name = contentType.Name,
                Description = contentType.Description
            };

            return new ServiceResponse<ContentTypeResponseModel>(response);
        }

        // Get All
        public async Task<ServiceResponse<List<ContentTypeResponseModel>>> GetAllContentTypesAsync()
        {
            var contentTypes = await _contentTypeRepository.GetAllAsync();

            var response = contentTypes.Select(x => new ContentTypeResponseModel
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description
            }).ToList();

            return new ServiceResponse<List<ContentTypeResponseModel>>(response);
        }

        // Delete
        public async Task<ServiceResponse<bool>> DeleteContentTypeAsync(int id)
        {
            var contentType = await _contentTypeRepository.GetByIdAsync(id);

            if (contentType == null)
            {
                return new ServiceResponse<bool>("error_content_type_not_found");
            }

            _contentTypeRepository.Delete(contentType);
            await _unitOfWork.SaveChangesAsync();

            return new ServiceResponse<bool>(true);
        }
    }
}
