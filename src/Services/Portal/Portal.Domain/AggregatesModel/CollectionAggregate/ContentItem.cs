using System.Text.Json.Serialization;
using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.CollectionAggregate
{
    public class ContentItem : Entity
    {
        public int CollectionId { get; set; }

        public string? ServiceImageId { get; set; }
        public string? ServiceViewImageUrl { get; set; }
        public DateTime? ServiceUploadedUtc { get; set; }
        public DateTime? ServiceExpirationUtc { get; set; }

        public string? OriginalUrl { get; set; }
        public string? DisplayUrl { get; set; }
        public string? ThumbnailUrl { get; set; }

        public int Width { get; set; }
        public int Height { get; set; }
        public int Size { get; set; }

        public string Name { get; set; } = null!;
        public string? FileName { get; set; }

        [JsonIgnore]
        public virtual Collection Collection { get; set; } = null!;
    }
}
