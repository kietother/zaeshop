namespace Portal.Domain.Models.CollectionModels
{
    public class CollectionViewModel
    {
        public int CollectionId { get; set; }

        public int? UserId { get; set; }

        public string? AnonymousInformation { get; set; }
        public DateTime CreatedOnUtc { get; set; }

        public string? IpAddress { get; set; }
        public string? SessionId { get; set; }
    }

    public class CollectionViewUserBuildModel
    {
        public int CollectionId { get; set; }
        public string? IdentityUserId { get; set; }

        public DateTime AtViewedOnUtc { get; set; }
        public string? AnonymousInformation { get; set; }

        public string? IpAddress { get; set; }
        public string? SessionId { get; set; }
    }
}
