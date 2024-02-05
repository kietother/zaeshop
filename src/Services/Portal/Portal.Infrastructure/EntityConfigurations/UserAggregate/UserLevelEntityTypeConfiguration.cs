using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portal.Domain.AggregatesModel.UserAggregate;

namespace Portal.Infrastructure.EntityConfigurations.UserAggregate
{
    public class UserLevelEntityTypeConfiguration : IEntityTypeConfiguration<UserLevel>
    {
        public void Configure(EntityTypeBuilder<UserLevel> builder)
        {
            builder.ToTable(nameof(UserLevel));
            builder.HasKey(x => x.Id);

            builder.HasOne(x => x.Level).WithMany(y => y.UserLevels).HasForeignKey(z => z.LevelId);
            builder.HasOne(x => x.User).WithMany(y => y.UserLevels).HasForeignKey(z => z.UserId);
        }
    }
}
