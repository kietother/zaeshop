using Common.Models;
using Portal.Domain.AggregatesModel.AlbumAggregate;
using Portal.Domain.Models.AlbumModels;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.SeedWork;
using Portal.Domain.AggregatesModel.UserAggregate;
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

        public async Task<ServiceResponse<bool>> GetStatusFollowAsync(FollowingRequestModel requestModel)
        {
            if (requestModel.AlbumId == null || requestModel.UserId == null)
                return new ServiceResponse<bool>("error_following_album");

            var user = await _userRepository.GetByIdentityUserIdAsync(requestModel.UserId);

            if (user == null)
                return new ServiceResponse<bool>("error_following_album");

            var followStatus = await _repository.GetQueryable()
                .AnyAsync(x => x.AlbumId == requestModel.AlbumId.GetValueOrDefault() && x.UserId == user.Id);

            return new ServiceResponse<bool>(followStatus);
        }

        public async Task<ServiceResponse<FollowingResponseModel>> CreateAsync(FollowingRequestModel requestModel)
        {
            if (requestModel.AlbumId == null || requestModel.UserId == null)
                return new ServiceResponse<FollowingResponseModel>("error_following_album");

            var user = await _userRepository.GetByIdentityUserIdAsync(requestModel.UserId);

            if (user == null)
                return new ServiceResponse<FollowingResponseModel>("error_following_album");

            var entity = new Following
            {
                UserId = user.Id,
                AlbumId = requestModel.AlbumId.Value
            };

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

        public async Task<ServiceResponse<bool>> DeleteAsync(FollowingRequestModel requestModel)
        {
            if (requestModel.AlbumId == null || requestModel.UserId == null)
                return new ServiceResponse<bool>("error_following_album");

            var user = await _userRepository.GetByIdentityUserIdAsync(requestModel.UserId);

            if (user == null)
                return new ServiceResponse<bool>("error_following_album");

            var entity = await _repository.GetQueryable()
                .SingleOrDefaultAsync(x => x.AlbumId == requestModel.AlbumId && x.UserId == user.Id);

            if (entity == null)
                return new ServiceResponse<bool>(false);

            _repository.Delete(entity);
            await _unitOfWork.SaveChangesAsync();

            return new ServiceResponse<bool>(true);
        }

        public async Task<ServiceResponse<PagingCommonResponse<FollowingPagingResponse>>> GetPagingAsync(PagingCommonRequest request, FollowingRequestModel filter)
        {
            if (filter.UserId == null)
                return new ServiceResponse<PagingCommonResponse<FollowingPagingResponse>>(new PagingCommonResponse<FollowingPagingResponse>
                {
                    RowNum = 0,
                    Data = new List<FollowingPagingResponse>()
                });

            var user = await _userRepository.GetByIdentityUserIdAsync(filter.UserId);

            if (user == null)
                return new ServiceResponse<PagingCommonResponse<FollowingPagingResponse>>(new PagingCommonResponse<FollowingPagingResponse>
                {
                    RowNum = 0,
                    Data = new List<FollowingPagingResponse>()
                });

            var parameters = new Dictionary<string, object?>
            {
                { "PageNumber", request.PageNumber },
                { "PageSize", request.PageSize },
                { "SearchTerm", request.SearchTerm },
                { "SortColumn", request.SortColumn },
                { "SortDirection", request.SortDirection },
                { "UserId", user.Id }
            };
            var result = await _unitOfWork.QueryAsync<FollowingPagingResponse>("Following_All_Paging", parameters);
            var record = result.FirstOrDefault(o => o.IsTotalRecord);

            if (record == null)
            {
                return new ServiceResponse<PagingCommonResponse<FollowingPagingResponse>>(new PagingCommonResponse<FollowingPagingResponse>
                {
                    RowNum = 0,
                    Data = new List<FollowingPagingResponse>()
                });
            }

            result.Remove(record);
            return new ServiceResponse<PagingCommonResponse<FollowingPagingResponse>>(new PagingCommonResponse<FollowingPagingResponse>
            {
                RowNum = record.RowNum,
                Data = result
            });
        }
    }
}
