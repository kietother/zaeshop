using System.Data;
using Microsoft.EntityFrameworkCore.Storage;

namespace Portal.Domain.SeedWork;
public interface IUnitOfWork
{
    IGenericRepository<TEntity> Repository<TEntity>() where TEntity : Entity;
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    Task ExecuteAsync(string query, Dictionary<string, object?>? parameters = null, CommandType commandType = CommandType.StoredProcedure, int? commandTimeout = null);
    Task<List<T>> QueryAsync<T>(string query, Dictionary<string, object?>? parameters = null, CommandType commandType = CommandType.StoredProcedure, int? commandTimeout = null);

    #region Transaction
    Task<IDbContextTransaction?> BeginTransactionAsync();
    Task CommitTransactionAsync(IDbContextTransaction? transaction);
    void RollbackTransaction();
    #endregion
}