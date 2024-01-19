using Common.Shared.Models.Users;
using Identity.Domain.Interfaces.Messaging;
using MassTransit;

namespace Identity.Infrastructure.Implements.Messaging
{
    public class SyncUserPortalPublisher : ISyncUserPortalPublisher
    {
        private readonly IPublishEndpoint _publishEndpoint;

        public SyncUserPortalPublisher(IPublishEndpoint publishEndpoint)
        {
            _publishEndpoint = publishEndpoint;
        }

        public async Task SyncUserPortalAsync(SyncUserPortalMessage message)
        {
            await _publishEndpoint.Publish(message);
        }
    }
}
