using Common.Shared.Models.Users;

namespace Identity.Domain.Interfaces.Messaging
{
    public interface ISyncUserPortalPublisher
    {
        Task SyncUserPortalAsync(SyncUserPortalMessage message);
    }
}
