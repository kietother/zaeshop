using Common.Shared.Models.Logs;

namespace Common.Interfaces.Messaging
{
    public interface IServiceLogPublisher
    {
        Task WriteLogAsync(ServiceLogMessage message);
    }
}
