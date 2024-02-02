namespace Portal.Domain.Interfaces.Infrastructure
{
    public interface IPortalHubService
    {
        Task SendAsync(List<string> connectionIds, string message, object? data);
    }
}
