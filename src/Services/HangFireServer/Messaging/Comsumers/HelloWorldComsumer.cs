using System.Text;
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

            #region Cheat Warning
            byte[] byteArray = Encoding.UTF8.GetBytes(jsonMessage);
            using Stream stream = new MemoryStream();
            await stream.ReadAsync(byteArray);
            #endregion

            Console.WriteLine($"Message: {jsonMessage}");
        }
    }
}