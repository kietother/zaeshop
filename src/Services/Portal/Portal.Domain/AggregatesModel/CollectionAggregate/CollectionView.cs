using System.Text.Json.Serialization;
using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.CollectionAggregate
{
    public class CollectionView : Entity
    {
        public int CollectionId { get; set; }
        public int? UserId { get; set; }

        public string? AnonymousInformation { get; set; }
        public DateTime Date { get; set; }
        public int View { get; set; }

        public string? IpAddress { get; set; }
        public string? SessionId { get; set; }

        [JsonIgnore]
        public virtual Collection Collection { get; set; } = null!;

        [JsonIgnore]
        public virtual User? User { get; set; } = null!;
    }
}
