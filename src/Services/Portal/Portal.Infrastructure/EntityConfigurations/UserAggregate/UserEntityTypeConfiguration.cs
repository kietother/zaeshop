using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portal.Domain.AggregatesModel.UserAggregate;

namespace Portal.Infrastructure.EntityConfigurations.UserAggregate;
public class UserEntityTypeConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable(nameof(User));
        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.Level).WithMany(y => y.Users).HasForeignKey(z => z.LevelId);

        builder.HasIndex(x => x.IdentityUserId).IsUnique();
        builder.HasIndex(x => x.Email).IsUnique();
        builder.HasIndex(x => x.UserName).IsUnique();
    }
}
