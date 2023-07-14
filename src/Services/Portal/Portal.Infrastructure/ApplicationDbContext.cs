using System.Reflection;
using Portal.Domain.AggregatesModel.UserAggregate;

namespace Portal.Infrastructure;
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    protected ApplicationDbContext()
    {
    }

    public DbSet<User> Users { get; set; }

    /// <summary>
    /// Responsiblity to migration database.
    /// </summary>
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}
