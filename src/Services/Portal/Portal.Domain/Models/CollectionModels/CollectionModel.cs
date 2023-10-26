using System.ComponentModel.DataAnnotations;

namespace Portal.Domain.Models.CollectionModels
{
    // Request model for Collection
    public class CollectionRequestModel
    {
        [Required(ErrorMessage = "error_collection_title_is_required")]
        public string Title { get; set; } = null!;

        public int AlbumId { get; set; }

        public int? Volume { get; set; }

        public string? ExtendName { get; set; }

        public string? Description { get; set; }
    }

    public class ContentItemRequestModel
    {
        public List<ContentItemRequestDetailModel>? Items;
    }

    public class ContentItemRequestDetailModel
    {
        public string Name { get; set; } = null!;
        public byte[] Data { get; set; } = null!;
    }

    // Response model for Collection
    public class CollectionResponseModel
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public int AlbumId { get; set; }
        public string? AlbumTitle { get; set; }
        public int? Volume { get; set; }
        public string? ExtendName { get; set; }
        public string? Description { get; set; }

        public List<string?>? ContentItems { get; set; }
    }
}
