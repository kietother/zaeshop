using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portal.Domain.AggregatesModel.CollectionAggregate;

namespace Portal.Infrastructure.EntityConfigurations.CollectionAggregate
{
    public class ContentItemEntityTypeConfiguration : IEntityTypeConfiguration<ContentItem>
    {
        public void Configure(EntityTypeBuilder<ContentItem> builder)
        {
            builder.ToTable(nameof(ContentItem));
            builder.HasKey(x => x.Id);

            builder.HasOne(x => x.Collection).WithMany(y => y.ContentItems).HasForeignKey(z => z.CollectionId);

            // Index column DisplayUrl when query by CollectionId
            builder.HasIndex(x => x.DisplayUrl).IncludeProperties(p => new { p.CollectionId });
        }
    }
}
