using System.ComponentModel.DataAnnotations;

namespace Portal.Domain.Models.AlbumAlertMessageModels
{
    // Request model
    public class AlbumAlertMessageRequestModel
    {
        [Required(ErrorMessage = "error_album_alert_message_name_is_required")]
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
    }

    // Response model
    public class AlbumAlertMessageResponseModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
