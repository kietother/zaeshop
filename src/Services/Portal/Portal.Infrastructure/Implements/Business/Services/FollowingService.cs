using Common.Models;
using Portal.Domain.AggregatesModel.AlbumAggregate;
using Portal.Domain.Models.AlbumModels;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.SeedWork;
using Portal.Domain.AggregatesModel.UserAggregate;
using Microsoft.AspNetCore.Identity;
using Portal.Infrastructure.Helpers;

namespace Portal.Infrastructure.Implements.Business.Services
{
    public class FollowingService : IFollowingService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IGenericRepository<Following> _repository;
        private readonly IGenericRepository<User> _userRepository;
        public FollowingService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _repository = unitOfWork.Repository<Following>();
            _userRepository = unitOfWork.Repository<User>();
        }
        public async Task<ServiceResponse<FollowingResponseModel>> CreateAsync(FollowingRequestModel requestModel)
        {
            var entity = new Following();

            if (requestModel.AlbumId == null || requestModel.UserId == null)
                return new ServiceResponse<FollowingResponseModel>("error_following_album");
            else
            {
                var user = await _userRepository.GetByIdentityUserIdAsync(requestModel.UserId);

                if (user == null)
                    return new ServiceResponse<FollowingResponseModel>("error_following_album");

                entity = new Following
                {
                    UserId = user.Id,
                    AlbumId = requestModel.AlbumId.Value
                };
            }

            _repository.Add(entity);
            await _unitOfWork.SaveChangesAsync();

            var responseModel = new FollowingResponseModel
            {
                Id = entity.Id,
                UserId = entity.UserId,
                AlbumId = entity.AlbumId
            };

            return new ServiceResponse<FollowingResponseModel>(responseModel);
        }

        public async Task<ServiceResponse<bool>> DeleteAsync(int id)
        {
            var entity = await _repository.GetByIdAsync(id);

            if (entity == null)
                return new ServiceResponse<bool>(false);
            else
            {
                _repository.Delete(entity);
                await _unitOfWork.SaveChangesAsync();
            }            

            return new ServiceResponse<bool>(true);
        }
    }
}
