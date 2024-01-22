using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Helpers
{
    public static class UserGenericRepositoryExtension
    {
        public static async Task<User?> GetByIdentityUserIdAsync(this IGenericRepository<User> repository, string identityUserId)
        {
            return await repository.GetQueryable().FirstOrDefaultAsync(x => x.IdentityUserId == identityUserId);
        }
    }
}
