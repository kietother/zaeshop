using Microsoft.AspNetCore.SignalR;
using Portal.Domain.Interfaces.Infrastructure;
using Portal.Infrastructure.Implements.Infrastructure;

namespace Portal.API.Hubs
{
    public class PortalHubService : IPortalHubService
    {
        private readonly IHubContext<PortalHub> _hubContext;

        public PortalHubService(IHubContext<PortalHub> hubContext)
        {
            _hubContext = hubContext;
        }

        public async Task SendAsync(List<string> connectionIds, string message, object? data)
        {
            foreach (var connectionId in connectionIds)
            {
                await _hubContext.Clients.Client(connectionId).SendAsync(message, data);
            }
        }
    }
}
