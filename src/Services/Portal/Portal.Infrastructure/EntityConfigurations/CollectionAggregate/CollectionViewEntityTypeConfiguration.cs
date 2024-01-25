using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portal.Domain.AggregatesModel.CollectionAggregate;

namespace Portal.Infrastructure.EntityConfigurations.CollectionAggregate
{
    public class CollectionViewEntityTypeConfiguration : IEntityTypeConfiguration<CollectionView>
    {
        public void Configure(EntityTypeBuilder<CollectionView> builder)
        {
            builder.ToTable(nameof(CollectionView));
            builder.HasKey(x => x.Id);

            builder.HasOne(x => x.Collection).WithMany(y => y.CollectionViews).HasForeignKey(z => z.CollectionId);
            builder.HasOne(x => x.User).WithMany(y => y.CollectionViews).HasForeignKey(z => z.UserId);
        }
    }
}
