using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Identity.Domain.AggregatesModel.UserAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Identity.Infrastructure.EntityConfigurations
{
    public class UserTokenEntityTypeConfiguration : IEntityTypeConfiguration<UserToken>
    {
        public void Configure(EntityTypeBuilder<UserToken> builder)
        {
            builder.ToTable(nameof(UserToken));
            builder.HasKey(x => x.Id);

            builder.HasOne(o => o.User).WithMany(x => x.UserTokens).HasForeignKey(y => y.UserId);
            builder.HasIndex(o => o.Token).IsUnique(true);
        }
    }
}