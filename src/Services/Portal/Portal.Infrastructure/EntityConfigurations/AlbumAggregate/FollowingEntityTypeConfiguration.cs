using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Portal.Domain.AggregatesModel.AlbumAggregate;

namespace Portal.Infrastructure.EntityConfigurations.AlbumAggregate
{
    public class FollowingEntityTypeConfiguration : IEntityTypeConfiguration<Following>
    {
        public void Configure(EntityTypeBuilder<Following> builder)
        {
            builder.ToTable(nameof(Following));
            builder.HasKey(f => new { f.UserId, f.AlbumId });

            builder.HasOne(f => f.User)
                   .WithMany(u => u.Followings)
                   .HasForeignKey(f => f.UserId)
                   .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(f => f.Album)
                   .WithMany(a => a.Followers)
                   .HasForeignKey(f => f.AlbumId)
                   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
