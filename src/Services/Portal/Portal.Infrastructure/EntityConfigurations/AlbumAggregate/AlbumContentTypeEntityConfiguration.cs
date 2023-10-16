using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portal.Domain.AggregatesModel.AlbumAggregate;

namespace Portal.Infrastructure.EntityConfigurations.AlbumAggregate
{
    public class AlbumContentTypeEntityConfiguration : IEntityTypeConfiguration<AlbumContentType>
    {
        public void Configure(EntityTypeBuilder<AlbumContentType> builder)
        {
            builder.ToTable(nameof(AlbumContentType));
            builder.HasKey(o => o.Id);

            builder.HasOne(x => x.Album).WithMany(y => y.AlbumContentTypes).HasForeignKey(z => z.AlbumId);
            builder.HasOne(x => x.ContentType).WithMany(y => y.AlbumContentTypes).HasForeignKey(z => z.ContentTypeId);
        }
    }
}
