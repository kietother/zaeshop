using System.Text.Json.Serialization;
using Portal.Domain.AggregatesModel.CollectionAggregate;
using Portal.Domain.Enums;
using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.AlbumAggregate
{
    public class Album : Entity
    {
        public string Title { get; set; } = null!;
        public string? Description { get; set; }

        public int? AlbumAlertMessageId { get; set; }

        #region More Infomation
        public string? AlternativeName { get; set; }
        public string? Type { get; set; }
        public EAlbumStatus AlbumStatus { get; set; }
        public string? ReleaseYear { get; set; }
        public string? AuthorNames { get; set; }
        public string? ArtitstNames { get; set; }
        public string? Tags { get; set; }
        #endregion

        [JsonIgnore]
        public virtual ICollection<Collection> Collections { get; set; } = new List<Collection>();

        [JsonIgnore]
        public virtual ICollection<AlbumContentType> AlbumContentTypes { get; set; } = new List<AlbumContentType>();

        [JsonIgnore]
        public virtual AlbumAlertMessage? AlbumAlertMessage { get; set; }
    }
}
