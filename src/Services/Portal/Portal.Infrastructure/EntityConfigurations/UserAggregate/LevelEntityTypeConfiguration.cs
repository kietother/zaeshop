using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portal.Domain.AggregatesModel.UserAggregate;

namespace Portal.Infrastructure.EntityConfigurations.UserAggregate
{
    public class LevelEntityTypeConfiguration : IEntityTypeConfiguration<Level>
    {
        public void Configure(EntityTypeBuilder<Level> builder)
        {
            builder.ToTable(nameof(Level));
            builder.HasKey(x => x.Id);
        }
    }
}
