using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.SeedWork;
using System.Text.Json.Serialization;

namespace Portal.Domain.AggregatesModel.AlbumAggregate
{
    public class Following : Entity
    {
        public int UserId { get; set; }

        [JsonIgnore]
        public virtual User User { get; set; } = null!;

        public int AlbumId { get; set; }

        [JsonIgnore]
        public virtual Album Album { get; set; } = null!;
    }
}
