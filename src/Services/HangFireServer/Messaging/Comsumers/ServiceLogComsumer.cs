using System.Text.Json;
using Common.Enums;
using Common.Shared.Models.Logs;
using MassTransit;
using Serilog;

namespace HangFireServer.Messaging.Comsumers
{
    public class ServiceLogComsumer : IConsumer<ServiceLogMessage>
    {
        public async Task Consume(ConsumeContext<ServiceLogMessage> context)
        {
            var serviceLogMessage = context.Message;
            switch (serviceLogMessage.LogLevel)
            {
                case ELogLevel.Information:
                    Log.Logger.Information(JsonSerializer.Serialize(serviceLogMessage));
                    break;
                case ELogLevel.Warning:
                    Log.Logger.Warning(JsonSerializer.Serialize(serviceLogMessage));
                    break;
                case ELogLevel.Error:
                    Log.Logger.Error(JsonSerializer.Serialize(serviceLogMessage));
                    break;
            }
            // Cheat warning async/await
            await Task.FromResult(0);
        }
    }
}
