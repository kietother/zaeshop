using System.Reflection;
using Identity.Domain.AggregatesModel.UserAggregate;
using Identity.Infrastructure.EntityConfigurations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Identity.Infrastructure
{
    public class AppIdentityDbContext : IdentityDbContext<User>
    {
        public AppIdentityDbContext(DbContextOptions<AppIdentityDbContext> options) : base(options)
        {
        }

        protected AppIdentityDbContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            // builder.ApplyConfiguration(new UserEntityTypeConfiguration());
            // builder.ApplyConfiguration(new UserTokenEntityTypeConfiguration());
        }

        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //     optionsBuilder.UseNpgsql("Server=tiny.db.elephantsql.com; Port=5432; User Id=vhbvlhko; Password=6GiIE2wvPo-Rln1EA6tcbfNE0Tadk8wX; Database=vhbvlhko");
        // }
    }
}