using System.Collections;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Repositories;
public class UnitOfWork : IUnitOfWork
{
    private readonly ApplicationDbContext context;
    private readonly Hashtable repositories;

    public UnitOfWork(ApplicationDbContext context)
    {
        this.context = context;
        repositories = new Hashtable();
    }

    public async Task<int> SaveChangesAsync()
    {
        return await context.SaveChangesAsync();
    }

    public void Dispose()
    {
        context.Dispose();
        // Call informs the garbage collector that the finalizer (destructor) for 
        // the current object does not need to be executed.
        GC.SuppressFinalize(this);
    }

    public IGenericRepository<TEntity> Repository<TEntity>() where TEntity : Entity
    {
        // Find repository exists

        // 1. Get Name Type
        string type = typeof(TEntity).Name;

        // 2. Check exists
        if (!repositories.ContainsKey(type))
        {
            var repositoryType = typeof(GenericRepository<>);

            // Create instance repository
            var repositoryInstance = Activator.CreateInstance(repositoryType.MakeGenericType(typeof(TEntity)), context);

            repositories.Add(type, repositoryInstance);
        }

        return (IGenericRepository<TEntity>)repositories[type]!;
    }
}