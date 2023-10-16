using System.Text.Json.Serialization;
using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.AlbumAggregate
{
    public class AlbumContentType : Entity
    {
        public int AlbumId { get; set; }
        public int ContentTypeId { get; set; }

        [JsonIgnore]
        public virtual Album Album { get; set; } = null!;

        [JsonIgnore]
        public virtual ContentType ContentType { get; set; } = null!;
    }
}
