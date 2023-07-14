namespace Portal.Domain.SeedWork;
public interface IGenericRepository<T> where T : Entity
{
    Task<List<T>> GetAllAsync();
    Task<T?> GetByIdAsync(int id);
    void Add(T entity);
    void Update(T entity);
    void Delete(T entity);

    // Task<T> GetEntityWithSpec(ISpecification<T> spec);
    // Task<IReadOnlyList<T>> GetAllWithSpec(ISpecification<T> spec);
    // Task<int> CountAsync(ISpecification<T> spec);
}