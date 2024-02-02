using System.Security.Claims;
using Microsoft.AspNetCore.SignalR;
using Portal.API.Attributes;
using Portal.Domain.AggregatesModel.UserAggregate;

namespace Portal.Infrastructure.Implements.Infrastructure
{
    [Authorize]
    public class PortalHub : Hub
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IGenericRepository<User> _userRepository;
        private readonly IGenericRepository<UserConnection> _userConnectionRepository;

        public PortalHub(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _userRepository = _unitOfWork.Repository<User>();
            _userConnectionRepository = _unitOfWork.Repository<UserConnection>();
        }

        public override async Task OnConnectedAsync()
        {
            string? identityUserId = Context.User?.FindFirstValue("id");
            if (!string.IsNullOrEmpty(identityUserId))
            {
                var user = await _userRepository.GetByIdentityUserIdAsync(identityUserId);
                if (user == null)
                {
                    await base.OnConnectedAsync();
                    return;
                }

                var userConnection = new UserConnection
                {
                    ConnectionId = Context.ConnectionId,
                    UserId = user.Id
                };

                _userConnectionRepository.Add(userConnection);
                await _unitOfWork.SaveChangesAsync();
            }

            Console.WriteLine($"User connected: {Context.ConnectionId}");
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            string? identityUserId = Context.User?.FindFirstValue("id");
            if (!string.IsNullOrEmpty(identityUserId))
            {
                var user = await _userRepository.GetByIdentityUserIdAsync(identityUserId);
                if (user == null)
                {
                    await base.OnDisconnectedAsync(exception);
                    return;
                }

                var userConnection = await _userConnectionRepository.GetQueryable().FirstOrDefaultAsync(o => o.UserId == user.Id && o.ConnectionId == Context.ConnectionId);
                if (userConnection != null)
                {
                    _userConnectionRepository.Delete(userConnection);
                    await _unitOfWork.SaveChangesAsync();
                }
            }

            Console.WriteLine($"User disconnected: {Context.ConnectionId}");
            await base.OnDisconnectedAsync(exception);
        }
    }
}
