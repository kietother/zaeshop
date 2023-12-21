namespace Portal.Domain.Models.CollectionModels
{
    public class ContentAppModel
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;

        public int AlbumId { get; set; }
        public string? AlbumTitle { get; set; }
        public string? AlbumFriendlyName { get; set; }

        public int? Volume { get; set; }
        public string? ExtendName { get; set; }
        public string? Description { get; set; }

        public bool IsPublic { get; set; }
        public string? FriendlyName { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }

        public List<string?>? ContentItems { get; set; }
    }
}
