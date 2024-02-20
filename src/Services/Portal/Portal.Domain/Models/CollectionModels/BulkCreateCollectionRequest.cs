namespace Portal.Domain.Models.CollectionModels
{
    public class BulkCreateCollectionRequest
    {
        public string Name { get; set; } = null!;
        public List<BulkCreateCollectionItemRequest> ContentItems { get; set; } = null!;
    }

    public class BulkCreateCollectionItemRequest
    {
        public string Name { get; set; } = null!;
        public int Size { get; set; }
    }
}
