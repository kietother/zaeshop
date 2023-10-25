using System.Text.Json.Serialization;

namespace Portal.Domain.Models.ImageUploadModels
{
    public class ImageUploadRequestModel
    {
        public string FileName { get; set; } = null!;
        public byte[] ImageData { get; set; } = null!;
    }

    public class ImageUploadResponseModel
    {
        [JsonPropertyName("id")]
        public string? Id { get; set; }

        [JsonPropertyName("title")]
        public string? Title { get; set; }

        [JsonPropertyName("url_viewer")]
        public string? ViewerUrl { get; set; }

        [JsonPropertyName("url")]
        public string? OriginalUrl { get; set; }

        [JsonPropertyName("display_url")]
        public string? DisplayUrl { get; set; }

        [JsonPropertyName("width")]
        public int Width { get; set; }

        [JsonPropertyName("height")]
        public int Height { get; set; }

        [JsonPropertyName("size")]
        public long Size { get; set; }

        [JsonPropertyName("time")]
        public long Time { get; set; }

        [JsonPropertyName("expiration")]
        public int Expiration { get; set; }

        [JsonPropertyName("delete_url")]
        public string? DeleteUrl { get; set; }

        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("status")]
        public int Status { get; set; }

        public ImageDetails? Image { get; set; }

        public ThumbnailDetails? Thumb { get; set; }

        public class ImageDetails
        {
            [JsonPropertyName("url")]
            public string? Url { get; set; }

            [JsonPropertyName("filename")]
            public string? Filename { get; set; }

            [JsonPropertyName("name")]
            public string? Name { get; set; }

            [JsonPropertyName("mime")]
            public string? Mime { get; set; }

            [JsonPropertyName("extension")]
            public string? Extension { get; set; }
        }

        public class ThumbnailDetails
        {
            [JsonPropertyName("url")]
            public string? Url { get; set; }

            [JsonPropertyName("filename")]
            public string? Filename { get; set; }

            [JsonPropertyName("name")]
            public string? Name { get; set; }

            [JsonPropertyName("mime")]
            public string? Mime { get; set; }

            [JsonPropertyName("extension")]
            public string? Extension { get; set; }
        }

    }
}
