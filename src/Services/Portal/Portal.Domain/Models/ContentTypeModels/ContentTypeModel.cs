using Portal.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace Portal.Domain.Models.ContentTypeModels
{
    // Request model
    public class ContentTypeRequestModel
    {
        [Required(ErrorMessage = "error_content_type_name_is_required")]
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
    }

    // Response model
    public class ContentTypeResponseModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public ERegion Region { get; set; }
    }
}
