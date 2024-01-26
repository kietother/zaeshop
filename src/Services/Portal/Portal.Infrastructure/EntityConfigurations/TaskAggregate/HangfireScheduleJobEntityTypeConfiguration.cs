using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portal.Domain.AggregatesModel.TaskAggregate;

namespace Portal.Infrastructure.EntityConfigurations.TaskAggregate
{
    public class HangfireScheduleJobEntityTypeConfiguration : IEntityTypeConfiguration<HangfireScheduleJob>
    {
        public void Configure(EntityTypeBuilder<HangfireScheduleJob> builder)
        {
            builder.ToTable(nameof(HangfireScheduleJob));
            builder.HasKey(x => x.Id);
        }
    }
}
