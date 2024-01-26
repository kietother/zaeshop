using Portal.Domain.AggregatesModel.TaskAggregate;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Helpers
{
    public static class HangfireScheduleJobGenericRepositoryExtension
    {
        public static async Task<HangfireScheduleJob?> GetByNameAsync(this IGenericRepository<HangfireScheduleJob> repository, string name)
        {
            return await repository.GetQueryable().FirstOrDefaultAsync(x => x.Name == name);
        }
    }
}
