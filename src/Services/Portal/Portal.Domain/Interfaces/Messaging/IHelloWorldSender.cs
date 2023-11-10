namespace Portal.Domain.Interfaces.Messaging
{
    public interface IHelloWorldSender
    {
        public Task SendAsync(string message);
    }
}
