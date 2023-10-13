using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.SeedWork;
public class GenericRepository<T> : IGenericRepository<T> where T : Entity
{
    public readonly ApplicationDbContext context;

    public GenericRepository(ApplicationDbContext context)
    {
        this.context = context;
    }

    public T? GetById(int id)
    {
        return context.Set<T>().Find(id);
    }

    public async Task<T?> GetByIdAsync(int id)
    {
        return await context.Set<T>().FindAsync(id);
    }

    public List<T> GetAll()
    {
        return context.Set<T>().ToList();
    }

    public async Task<List<T>> GetAllAsync()
    {
        return await context.Set<T>().ToListAsync();
    }

    public void Add(T entity)
    {
        context.Set<T>().Add(entity);
    }

    public void AddRange(List<T> entities)
    {
        context.Set<T>().AddRange(entities);
    }

    public void Update(T entity)
    {
        context.Set<T>().Attach(entity);
        context.Entry(entity).State = EntityState.Modified;
    }

    public void UpdateRange(List<T> entities)
    {
        context.Set<T>().AttachRange(entities);
        context.Entry(entities).State = EntityState.Modified;
    }

    public void Delete(T entity)
    {
        context.Set<T>().Remove(entity);
    }

    public void DeleteRange(T entity)
    {
        context.Set<T>().RemoveRange(entity);
    }

    public IQueryable<T> GetQueryable()
    {
        return context.Set<T>().AsQueryable();
    }
}
