using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portal.Domain.AggregatesModel.CollectionAggregate;

namespace Portal.Infrastructure.EntityConfigurations.CollectionAggregate
{
    public class CollectionEntityTypeConfiguration : IEntityTypeConfiguration<Collection>
    {
        public void Configure(EntityTypeBuilder<Collection> builder)
        {
            builder.ToTable(nameof(Collection));
            builder.HasKey(x => x.Id);

            builder.HasOne(x => x.Album).WithMany(y => y.Collections).HasForeignKey(z => z.AlbumId);
        }
    }
}
