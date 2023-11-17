using System.Text.Json;
using Common.Shared.Models.Test;
using MassTransit;

namespace HangFireServer.Messaging.Comsumers
{
    public class HelloWorldComsumer : IConsumer<HelloWorldMessage>
    {
        public async Task Consume(ConsumeContext<HelloWorldMessage> context)
        {
            var jsonMessage = JsonSerializer.Serialize(context.Message);
            Console.WriteLine($"Message: {jsonMessage}");
            await Task.FromResult(0);
        }
    }
}