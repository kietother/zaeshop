using System.Text.Json.Serialization;
using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.CollectionAggregate
{
    public class ContentItem : Entity
    {
        public string FilePath { get; set; } = null!;
        public int CollectionId { get; set; }

        [JsonIgnore]
        public virtual Collection Collection { get; set; } = null!;
    }
}
