using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portal.Domain.AggregatesModel.AlbumAggregate;

namespace Portal.Infrastructure.EntityConfigurations.AlbumAggregate
{
    public class AlbumAlertMessageIEntityTypeConfiguration : IEntityTypeConfiguration<AlbumAlertMessage>
    {
        public void Configure(EntityTypeBuilder<AlbumAlertMessage> builder)
        {
            builder.ToTable(nameof(AlbumAlertMessage));
            builder.HasKey(x => x.Id);
        }
    }
}
