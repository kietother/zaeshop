using Common.Shared.Models.Users;
using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.Enums;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Interfaces.Messaging;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Implements.Business.Services
{
    public class UserService : IUserService
    {
        private readonly IGenericRepository<User> _userRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ISyncResetExpiredRolePublisher _syncResetExpiredRolePublisher;

        public UserService(IUnitOfWork unitOfWork, ISyncResetExpiredRolePublisher syncResetExpiredRolePublisher)
        {
            _unitOfWork = unitOfWork;
            _userRepository = unitOfWork.Repository<User>();
            _syncResetExpiredRolePublisher = syncResetExpiredRolePublisher;
        }

        public async Task ResetRoleAsync()
        {
            var allUserPre = await _userRepository.GetQueryable()
                .Where(x => (x.RoleType == ERoleType.UserPremium || x.RoleType == ERoleType.UserSuperPremium) && x.ExpriedRoleDate != null)
                .ToListAsync();
            var userExpiredRoleIds = allUserPre.ConvertAll(x => x.IdentityUserId);

            foreach (var user in allUserPre)
            {
                if (user.ExpriedRoleDate <= DateTime.UtcNow)
                {
                    user.RoleType = ERoleType.User;
                    user.ExpriedRoleDate = null;
                }
            }

            await _unitOfWork.SaveChangesAsync();

            // Remove role from Identity and sync User
            await _syncResetExpiredRolePublisher.SendAsync(new SyncResetExpiredRoleMessage
            {
                UserIds = userExpiredRoleIds
            });
        }
    }
}
