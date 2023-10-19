using Common.Models;
using Portal.Domain.AggregatesModel.AlbumAggregate;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.AlbumAlertMessageModels;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Implements.Business.Services
{
    public class AlbumAlertMessageService : IAlbumAlertMessageService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IGenericRepository<AlbumAlertMessage> _repository;

        public AlbumAlertMessageService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _repository = unitOfWork.Repository<AlbumAlertMessage>();
        }

        public async Task<ServiceResponse<AlbumAlertMessageResponseModel>> AddAsync(AlbumAlertMessageRequestModel requestModel)
        {
            // Validate
            if (await DoesNameExistAsync(requestModel.Name))
            {
                return new ServiceResponse<AlbumAlertMessageResponseModel>("error_album_alert_message_name_already_exists");
            }

            // Map request model to entity
            var entity = new AlbumAlertMessage
            {
                Name = requestModel.Name,
                Description = requestModel.Description
            };

            _repository.Add(entity);
            await _unitOfWork.SaveChangesAsync();

            // Map entity to response model
            var responseModel = new AlbumAlertMessageResponseModel
            {
                Id = entity.Id,
                Name = entity.Name,
                Description = entity.Description,
                CreatedDate = entity.CreatedOnUtc
            };

            return new ServiceResponse<AlbumAlertMessageResponseModel>(responseModel);
        }

        public async Task<ServiceResponse<AlbumAlertMessageResponseModel>> UpdateAsync(int id, AlbumAlertMessageRequestModel requestModel)
        {
            var existing = await _repository.GetByIdAsync(id);
            if (existing == null)
                return new ServiceResponse<AlbumAlertMessageResponseModel>("error_album_alert_message_not_found");

            // Update existing from requestModel
            existing.Name = requestModel.Name;
            existing.Description = requestModel.Description;

            _repository.Update(existing);
            await _unitOfWork.SaveChangesAsync();

            // Map to responseModel
            var responseModel = new AlbumAlertMessageResponseModel
            {
                Id = existing.Id,
                Name = existing.Name,
                Description = existing.Description,
                CreatedDate = existing.CreatedOnUtc
            };
            return new ServiceResponse<AlbumAlertMessageResponseModel>(responseModel);
        }

        // Get All
        public async Task<ServiceResponse<List<AlbumAlertMessageResponseModel>>> GetAllAsync()
        {
            var albumAlertMessages = await _repository.GetAllAsync();

            var response = albumAlertMessages.Select(x => new AlbumAlertMessageResponseModel
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                CreatedDate = x.CreatedOnUtc
            }).ToList();

            return new ServiceResponse<List<AlbumAlertMessageResponseModel>>(response);
        }

        // Delete
        public async Task<ServiceResponse<bool>> DeleteAsync(int id)
        {
            var existing = await _repository.GetByIdAsync(id);
            if (existing == null)
                return new ServiceResponse<bool>("error_album_alert_message_not_found");

            _repository.Delete(existing);
            await _unitOfWork.SaveChangesAsync();

            return new ServiceResponse<bool>(true);
        }

        // Other private methods
        private async Task<bool> DoesNameExistAsync(string name)
        {
            return await _repository.GetQueryable().AnyAsync(x => x.Name == name);
        }
    }
}
