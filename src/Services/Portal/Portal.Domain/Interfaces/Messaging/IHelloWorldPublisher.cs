namespace Portal.Domain.Interfaces.Messaging
{
    public interface IHelloWorldPublisher
    {
        public Task SendAsync(string message);
    }
}
