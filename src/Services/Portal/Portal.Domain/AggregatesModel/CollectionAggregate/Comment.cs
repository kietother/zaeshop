using System.Text.Json.Serialization;
using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.CollectionAggregate
{
    public class Comment : Entity
    {
        public string Text { get; set; } = null!;

        public int CollectionId { get; set; }
        public int UserId { get; set; }

        [JsonIgnore]
        public virtual Collection Collection { get; set; } = null!;

        [JsonIgnore]
        public virtual User User { get; set; } = null!;
    }
}
