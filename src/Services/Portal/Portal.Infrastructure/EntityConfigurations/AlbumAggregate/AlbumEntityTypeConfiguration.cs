using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portal.Domain.AggregatesModel.AlbumAggregate;

namespace Portal.Infrastructure.EntityConfigurations.AlbumAggregate
{
    public class AlbumEntityTypeConfiguration : IEntityTypeConfiguration<Album>
    {
        public void Configure(EntityTypeBuilder<Album> builder)
        {
            builder.ToTable(nameof(Album));
            builder.HasKey(x => x.Id);
        }
    }
}
