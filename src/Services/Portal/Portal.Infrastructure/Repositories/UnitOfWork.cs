using System.Diagnostics;
using Microsoft.EntityFrameworkCore.Storage;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Repositories;
public class UnitOfWork : IUnitOfWork
{
    private readonly ApplicationDbContext context;
    private readonly Hashtable repositories;

    #region Transaction
    private IDbContextTransaction? _currentTransaction;
    public IDbContextTransaction? GetCurrentTransaction() => _currentTransaction;
    public bool HasActiveTransaction => _currentTransaction != null;
    #endregion

    public UnitOfWork(ApplicationDbContext context)
    {
        this.context = context;
        repositories = new Hashtable();
    }

    public void Dispose()
    {
        context.Dispose();
        // Call informs the garbage collector that the finalizer (destructor) for 
        // the current object does not need to be executed.
        GC.SuppressFinalize(this);
    }

    [DebuggerStepThrough]
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

    public async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        return await context.SaveChangesAsync(cancellationToken);
    }

    #region Transaction
    public async Task<IDbContextTransaction?> BeginTransactionAsync()
    {
        if (_currentTransaction != null) return null;

        _currentTransaction = await context.Database.BeginTransactionAsync(IsolationLevel.ReadCommitted);

        return _currentTransaction;
    }

    public async Task CommitTransactionAsync(IDbContextTransaction? transaction)
    {
        if (transaction == null) throw new ArgumentNullException(nameof(transaction));
        if (transaction != _currentTransaction) throw new InvalidOperationException($"Transaction {transaction.TransactionId} is not current");

        try
        {
            await SaveChangesAsync();
            await transaction.CommitAsync();
        }
        catch
        {
            RollbackTransaction();
            throw;
        }
        finally
        {
            if (_currentTransaction != null)
            {
                _currentTransaction.Dispose();
                _currentTransaction = null;
            }
        }
    }

    public void RollbackTransaction()
    {
        try
        {
            _currentTransaction?.Rollback();
        }
        finally
        {
            if (_currentTransaction != null)
            {
                _currentTransaction.Dispose();
                _currentTransaction = null;
            }
        }
    }
    #endregion
}