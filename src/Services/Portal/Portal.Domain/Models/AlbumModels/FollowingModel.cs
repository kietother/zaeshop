
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
}
