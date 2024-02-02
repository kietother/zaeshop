using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portal.Domain.AggregatesModel.UserAggregate;

namespace Portal.Infrastructure.EntityConfigurations.UserAggregate
{
    public class UserConnectionEntityTypeConfiguration : IEntityTypeConfiguration<UserConnection>
    {
        public void Configure(EntityTypeBuilder<UserConnection> builder)
        {
            builder.ToTable(nameof(UserConnection));
            builder.HasKey(x => x.Id);

            builder.HasOne(x => x.User).WithMany(y => y.UserConnections).HasForeignKey(z => z.UserId);

            builder.HasIndex(x => x.ConnectionId);
        }
    }
}
