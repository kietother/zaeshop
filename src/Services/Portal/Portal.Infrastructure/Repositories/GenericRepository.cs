using Portal.Domain.SeedWork;
using Portal.Domain;

namespace Portal.Infrastructure;
public class GenericRepository<T> : IGenericRepository<T> where T : Entity
{
    public readonly ApplicationDbContext context;

    public GenericRepository(ApplicationDbContext context)
    {
        this.context = context;
    }
    public async Task<T?> GetByIdAsync(int id)
    {
        return await context.Set<T>().FindAsync(id);
    }

    public async Task<List<T>> GetAllAsync()
    {
        return await context.Set<T>().ToListAsync();
    }

    public void Add(T entity)
    {
        context.Set<T>().Add(entity);
    }

    public void Update(T entity)
    {
        context.Set<T>().Attach(entity);
        context.Entry(entity).State = EntityState.Modified;
    }

    public void Delete(T entity)
    {
        context.Set<T>().Remove(entity);
    }

    // public async Task<T> GetEntityWithSpec(ISpecification<T> spec)
    // {
    //     return await ApplySpecification(spec).FirstOrDefaultAsync();
    // }
    // public async Task<IReadOnlyList<T>> GetAllWithSpec(ISpecification<T> spec)
    // {
    //     return await ApplySpecification(spec).ToListAsync();
    // }

    // public async Task<int> CountAsync(ISpecification<T> spec)
    // {
    //     return await ApplySpecification(spec).CountAsync();
    // }

    // private IQueryable<T> ApplySpecification(ISpecification<T> spec)
    // {
    //     return SpecificationEvaluator<T>.GetQuery(context.Set<T>().AsQueryable(), spec);
    // }
}
