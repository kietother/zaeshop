using System.Text.Json.Serialization;
using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.AlbumAggregate
{
    public class ContentType : Entity
    {
        public string Name { get; set; } = null!;
        public string? Description { get; set; }

        [JsonIgnore]
        public virtual ICollection<AlbumContentType> AlbumContentTypes { get; set; } = new List<AlbumContentType>();
    }
}
