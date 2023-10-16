using System;

namespace Portal.Domain.Models.ContentTypeModels
{
    // Request model
    public class ContentTypeRequestModel
    {
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
    }

    // Response model
    public class ContentTypeResponseModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
    }
}
