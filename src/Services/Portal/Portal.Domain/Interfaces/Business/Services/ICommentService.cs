using Common.Models;
using Portal.Domain.Models.CommentModels;

namespace Portal.Domain.Interfaces.Business.Services
{
    public interface ICommentService
    {
        Task<ServiceResponse<CommentModel>> CreateAsync(CommentRequestModel request, int userId);
        Task<ServiceResponse<CommentModel>> UpdateAsync(int id, CommentRequestModel request, int userId);
        Task<ServiceResponse<bool>> DeleteAsync(int id, int userId);
    }
}
