using System.ComponentModel.DataAnnotations;

namespace Portal.Domain.Models.AlbumModels
{
    public class AlbumRequestModel
    {
        [Required(ErrorMessage = "error_album_name_is_required")]
        public string Title { get; set; } = null!;
        public string? Description { get; set; }
        public int? AlbumAlertMessageId { get; set; }
        public List<int>? ContentTypeIds { get; set; }
    }

    public class AlbumResponseModel
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string? Description { get; set; }
        public string? AlbumAlertMessageName { get; set; }
        public string? ContentTypeNames { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
