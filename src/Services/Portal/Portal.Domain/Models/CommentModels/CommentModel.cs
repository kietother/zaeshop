using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Common.Models;

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
        public int? ReplyCount { get; set; }
        public string? Avatar { get; set; }
        public DateTime CreatedOnUtc { get; set; }
        public DateTime? UpdatedOnUtc { get; set; }
    }

    public class CommentPagingRequestModel : PagingCommonRequest
    {
        public int AlbumId { get; set; }
        public int? CollectionId { get; set; }
        public int? UserId { get; set; }
        public int? ParentCommentId { get; set; }
        public bool? IsReply { get; set; }
    }

    public class CommentPagingResposneModel : CommentModel
    {
        [JsonIgnore]
        public long RowNum { get; set; }

        [JsonIgnore]
        public bool IsTotalRecord { get; set; }
    }

    public class CommentRequestModel
    {
        [Required]
        [MaxLength(500, ErrorMessage = "error_comment_max_length_250_characters")]
        public string Text { get; set; } = null!;
        public int AlbumId { get; set; }
        public int? CollectionId { get; set; }
        public int? ParentCommentId { get; set; }
    }
}
