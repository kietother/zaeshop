using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.TaskAggregate
{
    public class HangfireScheduleJob : Entity
    {
        public string? Name { get; set; }
        public bool IsEnabled { get; set; }
        public bool IsRunning { get; set; }

        public DateTime? StartOnUtc { get; set; }
        public DateTime? EndOnUtc { get; set; }
    }
}
