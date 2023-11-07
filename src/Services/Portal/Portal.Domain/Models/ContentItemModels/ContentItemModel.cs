using Portal.Domain.Models.CollectionModels;

namespace Portal.Domain.Models.ContentItemModels
{
    public class ContentItemUpdateRequestModel : ContentItemRequestModel
    {
        public List<ContentItemExistsModel>? ExistsItems { get; set; }
    }

    public class ContentItemExistsModel
    {
        public int Id { get; set; }
        public bool IsPublic { get; set; }
        public int OrderBy { get; set; }
    }
}
