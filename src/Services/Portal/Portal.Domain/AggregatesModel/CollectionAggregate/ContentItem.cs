using System.Text.Json.Serialization;
using Portal.Domain.Enums;
using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.CollectionAggregate
{
    public class ContentItem : Entity
    {
        public int CollectionId { get; set; }
        public string Name { get; set; } = null!;

        /// <summary>
        /// Absolute url
        /// </summary>
        public string? OriginalUrl { get; set; }

        /// <summary>
        /// Absolute or CDN url
        /// </summary>
        public string? DisplayUrl { get; set; }

        /// <summary>
        /// File Name or Relative Url
        /// </summary>
        public string? RelativeUrl { get; set; }

        /// <summary>
        /// Image order number
        /// </summary>
        public int OrderBy { get; set; }

        public EContentItemType Type { get; set; }
        public bool IsPublic { get; set; }

        [JsonIgnore]
        public virtual Collection Collection { get; set; } = null!;
    }
}
