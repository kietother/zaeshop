using System.Text.Json.Serialization;
using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.AlbumAggregate
{
    public class AlbumAlertMessage : Entity
    {
        public string Name { get; set; } = null!;
        public string? Description { get; set; }

        [JsonIgnore]
        public virtual ICollection<Album> Albums { get; set; } = new List<Album>();
    }
}
