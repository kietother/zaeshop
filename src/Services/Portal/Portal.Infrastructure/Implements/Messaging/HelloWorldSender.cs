using Common.Shared.Models.Test;
using MassTransit;
using Portal.Domain.Interfaces.Messaging;

namespace Portal.Infrastructure.Implements.Messaging
{
    public class HelloWorldSender : IHelloWorldSender
    {
        private readonly IPublishEndpoint _publishEndpoint;

        public HelloWorldSender(IPublishEndpoint publishEndpoint)
        {
            _publishEndpoint = publishEndpoint;
        }

        public async Task SendAsync(string message)
        {
            await _publishEndpoint.Publish<HelloWorldMessage>(new
            {
                Message = message,
                Version = "1.0.0"
            });
        }
    }
}
