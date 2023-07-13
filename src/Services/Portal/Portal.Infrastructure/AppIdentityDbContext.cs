using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Portal.Domain;

namespace Portal.Infrastructure;
public class AppIdentityDbContext : DbContext
{
    public AppIdentityDbContext(DbContextOptions options) : base(options)
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
