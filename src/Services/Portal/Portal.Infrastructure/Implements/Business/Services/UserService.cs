using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.Enums;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Implements.Business.Services
{
    public class UserService : IUserService
    {
        private readonly IGenericRepository<User> _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _userRepository = unitOfWork.Repository<User>();
        }

        public async Task ResetRoleAsync()
        {
            var allUserPre = await _userRepository.GetQueryable()
                .Where(x => (x.RoleType == ERoleType.UserPremium || x.RoleType == ERoleType.UserSuperPremium) && x.ExpriedRoleDate != null)
                .ToListAsync();

            foreach (var user in allUserPre)
            {
                if (user.ExpriedRoleDate <=  DateTime.Now)
                {
                    user.RoleType = ERoleType.User;
                    user.ExpriedRoleDate = null;
                }    
            }

            await _unitOfWork.SaveChangesAsync();
        }
    }
}
