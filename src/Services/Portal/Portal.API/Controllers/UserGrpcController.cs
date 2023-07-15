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
    }
}
