
namespace Portal.Domain.Interfaces.Business.Services
{
    public interface IUserService
    {
        Task ResetRoleTaskAsync();
        Task ResetRoleAsync();
    }
}
