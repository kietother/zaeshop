using Newtonsoft.Json;

namespace Portal.Infrastructure.Helpers
{
    public class ApiSettings
    {
    }

    public class GooglePhotosApiWebSettings
    {
        [JsonProperty("web")]
        public GooglePhotosApiSettings Web { get; set; } = null!;
    }

    public class GooglePhotosApiSettings
    {
        [JsonProperty("client_id")]
        public string ClientId { get; set; } = null!;

        [JsonProperty("project_id")]
        public string ProjectId { get; set; } = null!;

        [JsonProperty("auth_uri")]
        public string AuthUri { get; set; } = null!;

        [JsonProperty("token_uri")]
        public string TokenUri { get; set; } = null!;

        [JsonProperty("auth_provider_x509_cert_url")]
        public string AuthProviderX509CertUrl { get; set; } = null!;

        [JsonProperty("client_secret")]
        public string ClientSecret { get; set; } = null!;

        [JsonProperty("redirect_uris")]
        public List<string> RedirectUris { get; set; } = null!;

        [JsonProperty("javascript_origins")]
        public List<string> JavascriptOrigins { get; set; } = null!;
    }
}
