using Microsoft.EntityFrameworkCore.Storage;

namespace Portal.Domain.SeedWork;
public interface IUnitOfWork : IDisposable
{
    IGenericRepository<TEntity> Repository<TEntity>() where TEntity : Entity;
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    #region Transaction
    Task<IDbContextTransaction?> BeginTransactionAsync();
    Task CommitTransactionAsync(IDbContextTransaction? transaction);
    void RollbackTransaction();
    #endregion
}