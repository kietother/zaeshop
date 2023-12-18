using Portal.Domain.Models.CollectionModels;

namespace Portal.Domain.Models.AlbumModels
{
    public class ComicAppModel
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string? Description { get; set; }
        public string? AlbumAlertMessageName { get; set; }
        public string? ContentTypeNames { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }

        public bool IsPublic { get; set; }
        public string? FriendlyName { get; set; }

        public List<ContentAppModel> Contents { get; set; } = [];
    }
}
