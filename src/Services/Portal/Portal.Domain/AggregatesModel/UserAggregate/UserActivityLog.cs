using Portal.Domain.Enums;
using Portal.Domain.SeedWork;
using System.Text.Json.Serialization;

namespace Portal.Domain.AggregatesModel.UserAggregate
{
    public class UserActivityLog : Entity
    {
        public string? Description { get; set; }
        public string? IpV4Address { get; set; }
        public string? IpV6Address { get; set; }
        public EActivityType ActivityType { get; set; }
        public int LogTimes { get; set; }
        public int UserId { get; set; }
        [JsonIgnore]
        public virtual User User { get; set; } = null!;
    }
}
