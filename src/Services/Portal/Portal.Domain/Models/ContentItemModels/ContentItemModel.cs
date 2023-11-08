using Portal.Domain.Enums;

namespace Portal.Domain.Models.ContentItemModels
{
    public class ContentItemUpdateRequestModel
    {
        public List<ContentItemUpdateModel>? Items { get; set; }
        public List<ContentItemUpdateModel>? ExistsItems { get; set; }
    }

    public class ContentItemUpdateModel
    {
        public int? Id { get; set; }

        public string? FileName { get; set; }
        public string? Base64File { get; set; }
        public byte[]? FileData => !string.IsNullOrEmpty(Base64File) ? Convert.FromBase64String(Base64File) : null;

        public bool IsPublic { get; set; }
        public int OrderBy { get; set; }
    }

    public class GetContentItemModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int OrderBy { get; set; }

        public string? RelativeUrl { get; set; }
        public string? OriginalUrl { get; set; }
        public string? DisplayUrl { get; set; }

        public EContentItemType Type { get; set; }
        public DateTime CreatedOnUtc { get; set; }
    }
}
