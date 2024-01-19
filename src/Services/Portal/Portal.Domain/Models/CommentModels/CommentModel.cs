using System.ComponentModel.DataAnnotations;

namespace Portal.Domain.Models.CommentModels
{
    public class CommentModel
    {
        public int Id { get; set; }
        public string Text { get; set; } = null!;

        public int AlbumId { get; set; }
        public int? CollectionId { get; set; }

        public int UserId { get; set; }
        public string? FullName { get; set; }
        public string? UserName { get; set; }

        public int? ParentCommentId { get; set; }

        public DateTime CreatedOnUtc { get; set; }
        public DateTime? UpdatedOnUtc { get; set; }
    }

    public class CommentRequestModel
    {
        [Required]
        [MaxLength(500, ErrorMessage = "error_comment_max_length_250_characters")]
        public string Text { get; set; } = null!;

        public int AlbumId { get; set; }
        public int? CollectionId { get; set; }
    }
}
