
using System.Text.Json.Serialization;

namespace Portal.Domain.Models.AlbumModels
{
    public class FollowingRequestModel
    {
        public string? UserId { get; set; }
        public int? AlbumId { get; set; }
    }

    public class FollowingResponseModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int AlbumId { get; set; }
    }

    public class FollowingPagingResponse
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int AlbumId { get; set; }
        public string Title { get; set; } = null!;
        public string? LastCollectionTitle { get; set; }
        public ulong? Views { get; set; }
        public string? CdnThumbnailUrl { get; set; }
        public string? FriendlyName { get; set; }

        [JsonIgnore]
        public long RowNum { get; set; }

        [JsonIgnore]
        public bool IsTotalRecord { get; set; }
    }
}
