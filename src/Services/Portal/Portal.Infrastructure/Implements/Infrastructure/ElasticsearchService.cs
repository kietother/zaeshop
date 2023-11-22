using Common.Enums;
using Common.Interfaces.Messaging;
using Common.Shared.Models.Logs;
using Elastic.Clients.Elasticsearch;
using Elastic.Clients.Elasticsearch.Core.Bulk;
using Elastic.Clients.Elasticsearch.IndexManagement;
using Portal.Domain.AggregatesModel.AlbumAggregate;
using Portal.Domain.Interfaces.Infrastructure;
using Portal.Domain.Models.AlbumModels;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Implements.Infrastructure
{
    public class ElasticsearchService : IElasticsearchService
    {
        private readonly string _albumIndex = "album-index";
        private readonly ElasticsearchClient _elasticsearchClient;
        private readonly IServiceLogPublisher _serviceLogPublisher;
        private readonly IUnitOfWork _unitOfWork;

        public ElasticsearchService(
            ElasticsearchClient elasticsearchClient,
            IServiceLogPublisher serviceLogPublisher,
            IUnitOfWork unitOfWork)
        {
            _elasticsearchClient = elasticsearchClient;
            _serviceLogPublisher = serviceLogPublisher;
            _unitOfWork = unitOfWork;
        }

        public async Task SyncAlbumsAsync()
        {
            var albumns = await _unitOfWork.Repository<Album>().GetAllAsync();
            var albumnDocuments = albumns.Select(x => new AlbumDocument
            {
                Id = x.Id,
                Title = x.Title,
                Description = x.Description,
                AlbumAlertMessageId = x.AlbumAlertMessageId,
                AlbumAlertMessageName = x.AlbumAlertMessage?.Name,
                CreatedDate = x.CreatedOnUtc,
                UpdatedDate = x.UpdatedOnUtc
            }).ToList();

            // Create if index not found
            var result = await _elasticsearchClient.Indices.ExistsAsync(_albumIndex);
            if (!result.Exists)
            {
                await CreateIndexAsync();
            }

            await BulkUpdateDocumenstAsync(albumnDocuments);
        }

        public async Task<bool> CreateIndexAsync()
        {
            var createIndexRequest = new CreateIndexRequest(_albumIndex);
            var createIndexResponse = await _elasticsearchClient.Indices.CreateAsync(createIndexRequest);

            if (!createIndexResponse.IsValidResponse)
            {
                await _serviceLogPublisher.WriteLogAsync(new ServiceLogMessage
                {
                    LogLevel = ELogLevel.Information,
                    EventName = "[ELK] CreateIndexAsync",
                    ServiceName = "Portal",
                    Environment = "Local",
                    Description = "Method AlbumSyncElkJob.CreateIndexAsync returns (false)"
                });
                return false;
            }

            return createIndexResponse.IsValidResponse;
        }

        public async Task<bool> DeleteIndexAsync()
        {
            var deleteIndexRequest = new DeleteIndexRequest(_albumIndex);
            var deleteIndexResponse = await _elasticsearchClient.Indices.DeleteAsync(deleteIndexRequest);

            if (!deleteIndexResponse.IsValidResponse)
            {
                await _serviceLogPublisher.WriteLogAsync(new ServiceLogMessage
                {
                    LogLevel = ELogLevel.Information,
                    EventName = "[ELK] DeleteIndexAsync",
                    ServiceName = "Portal",
                    Environment = "Local",
                    Description = "Method AlbumSyncElkJob.DeleteIndexAsync returns (false)"
                });
                return false;
            }

            return deleteIndexResponse.IsValidResponse;
        }

        public async Task ResetIndexes()
        {
            await DeleteIndexAsync();
            await CreateIndexAsync();
        }

        public async Task UpdateDocumentAsync(AlbumDocument albumDocument)
        {
            var bulkOperation = new BulkUpdateOperation<object, object>(albumDocument.Id, albumDocument);
            var bulkResponse = await _elasticsearchClient.BulkAsync(b => b.Update(bulkOperation));
            if (bulkResponse.Errors)
            {
                await _serviceLogPublisher.WriteLogAsync(new ServiceLogMessage
                {
                    LogLevel = ELogLevel.Information,
                    EventName = "[ELK] UpdateDocumentAsync",
                    ServiceName = "Portal",
                    Environment = "Local",
                    Description = bulkResponse.DebugInformation
                });
            }
        }

        public async Task BulkUpdateDocumenstAsync(List<AlbumDocument> albumDocuments)
        {
            var bulkAll = new List<BulkOperation>();
            foreach (var album in albumDocuments)
            {
                var bulkOperation = new BulkUpdateOperation<object, object>(album.Id, album);
                bulkAll.Add(bulkOperation);
            }

            var bulkResponse = await _elasticsearchClient.BulkAsync(b => b.UpdateMany(bulkAll));
            if (bulkResponse.Errors)
            {
                await _serviceLogPublisher.WriteLogAsync(new ServiceLogMessage
                {
                    LogLevel = ELogLevel.Information,
                    EventName = "[ELK] BulkUpdateDocumenstAsync",
                    ServiceName = "Portal",
                    Environment = "Local",
                    Description = bulkResponse.DebugInformation
                });
            }
        }
    }
}