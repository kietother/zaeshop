using System.Text.Json;
using Common.Shared.Models.Test;
using MassTransit;

namespace HangFireServer.Messaging.Comsumers
{
    public class HelloWorldComsumer : IConsumer<HelloWorldMessage>
    {
        public async Task Consume(ConsumeContext<HelloWorldMessage> context)
        {
            await Task.Run(() =>
            {
                var jsonMessage = JsonSerializer.Serialize(context.Message);
                Console.WriteLine($"OrderCreated message: {jsonMessage}");
            });
        }
    }
}
