using Portal.Domain.Models.AlbumModels;

namespace Portal.Domain.Interfaces.Infrastructure
{
    public interface IElasticsearchService
    {
        Task SyncAlbumsAsync();
        Task<bool> CreateIndexAsync();
        Task<bool> DeleteIndexAsync();
        Task ResetIndexes();
        Task UpdateDocumentAsync(AlbumDocument albumDocument);
        Task BulkUpdateDocumenstAsync(List<AlbumDocument> albumDocuments);
    }
}
