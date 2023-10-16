using System.Text.Json.Serialization;
using Portal.Domain.AggregatesModel.AlbumAggregate;
using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.CollectionAggregate
{
    public class Collection : Entity
    {
        public int AlbumId { get; set; }
        public int Volume { get; set; }

        public string Title { get; set; } = null!;
        public string? ExtendName { get; set; }
        public string? Description { get; set; }

        [JsonIgnore]
        public virtual Album Album { get; set; } = null!;

        public virtual ICollection<ContentItem> ContentItems { get; set; } = new List<ContentItem>();
        public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();
    }
}
