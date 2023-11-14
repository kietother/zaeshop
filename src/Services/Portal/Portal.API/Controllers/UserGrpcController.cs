using System.Net;
using Grpc.Core;
using Portal.Domain.AggregatesModel.UserAggregate;
using PortalGrpc;

namespace Portal.API.Controllers
{
    public class UserGrpcController : UserGrpcService.UserGrpcServiceBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public UserGrpcController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public override async Task<UsersReply> GetUsers(UserRequest request, ServerCallContext context)
        {
            var users = await _unitOfWork.Repository<User>().GetQueryable()
                .Filter(o => o.Id == 1)
                .Project(x => new User { Id = x.Id, FullName = x.FullName, IdentityUserId = x.IdentityUserId })
                .ToListAsync();
            var usersReply = new UsersReply();

            foreach (var user in users)
            {
                usersReply.UserReply.Add(new UserReply
                {
                    Id = user.Id.ToString(),
                    FullName = user.FullName ?? string.Empty,
                    IdentityId = user.IdentityUserId
                });
            }

            return usersReply;
        }

        public override async Task<SyncUserReply> SyncUserFromIdentity(SyncUserRequest request, ServerCallContext context)
        {
            // Validate model
            if (string.IsNullOrEmpty(request.IdentityId))
            {
                return new SyncUserReply
                {
                    PortalId = 0,
                    IsSuccess = false,
                    Message = "Identity Id is required."
                };
            }

            if (string.IsNullOrEmpty(request.FullName))
            {
                return new SyncUserReply
                {
                    PortalId = 0,
                    IsSuccess = false,
                    Message = "FullName is required."
                };
            }

            var hasUserExists = await _unitOfWork.Repository<User>().GetQueryable().AnyAsync(x => x.IdentityUserId == request.IdentityId);
            if (hasUserExists)
            {
                return new SyncUserReply
                {
                    PortalId = 0,
                    IsSuccess = false,
                    Message = HttpStatusCode.BadRequest.ToString()
                };
            }

            var user = new User
            {
                IdentityUserId = request.IdentityId,
                FullName = request.FullName
            };

            _unitOfWork.Repository<User>().Add(user);
            await _unitOfWork.SaveChangesAsync();

            return new SyncUserReply
            {
                IsSuccess = true,
                Message = HttpStatusCode.OK.ToString(),
                PortalId = user.Id
            };
        }
    }
}
