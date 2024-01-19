using Common.Models;
using Portal.Domain.AggregatesModel.AlbumAggregate;
using Portal.Domain.AggregatesModel.CollectionAggregate;
using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.Models.CommentModels;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Implements.Business.Services
{
    public class CommentService : ICommentService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IGenericRepository<Comment> _commentRepository;
        private readonly IGenericRepository<Album> _albumRepository;
        private readonly IGenericRepository<User> _userRepository;

        public CommentService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _commentRepository = _unitOfWork.Repository<Comment>();
            _albumRepository = _unitOfWork.Repository<Album>();
            _userRepository = _unitOfWork.Repository<User>();
        }

        public async Task<ServiceResponse<CommentModel>> CreateAsync(CommentRequestModel request, int userId)
        {
            var user = await _userRepository.GetByIdAsync(userId);
            if (user == null)
            {
                return new ServiceResponse<CommentModel>("error_user_not_found");
            }

            var album = await _albumRepository.GetByIdAsync(request.AlbumId);
            if (album == null)
            {
                return new ServiceResponse<CommentModel>("error_album_not_found");
            }

            Collection? collection;
            if (request.CollectionId.HasValue)
            {
                collection = await _unitOfWork.Repository<Collection>().GetByIdAsync(request.CollectionId.Value);
                if (collection == null)
                {
                    return new ServiceResponse<CommentModel>("error_collection_not_found");
                }
            }

            var comment = new Comment
            {
                Text = request.Text,
                CollectionId = request.CollectionId,
                UserId = userId,
                AlbumId = request.AlbumId
            };

            _commentRepository.Add(comment);
            await _unitOfWork.SaveChangesAsync();

            // Response
            var response = new CommentModel
            {
                Id = comment.Id,
                Text = comment.Text,
                UserId = comment.UserId,
                AlbumId = comment.AlbumId,
                CollectionId = comment.CollectionId,
                CreatedOnUtc = comment.CreatedOnUtc,
                UpdatedOnUtc = comment.UpdatedOnUtc
            };

            return new ServiceResponse<CommentModel>(response);
        }

        public async Task<ServiceResponse<CommentModel>> UpdateAsync(int id, CommentRequestModel request, int userId)
        {
            var comment = await _commentRepository.GetByIdAsync(id);
            if (comment == null || comment.IsDeleted)
            {
                return new ServiceResponse<CommentModel>("error_comment_not_found");
            }

            var user = await _userRepository.GetByIdAsync(userId);
            if (user == null)
            {
                return new ServiceResponse<CommentModel>("error_user_not_found");
            }

            if (comment.UserId != userId)
            {
                return new ServiceResponse<CommentModel>("error_comment_not_belog_current_user");
            }

            var album = await _albumRepository.GetByIdAsync(request.AlbumId);
            if (album == null)
            {
                return new ServiceResponse<CommentModel>("error_album_not_found");
            }

            Collection? collection;
            if (request.CollectionId.HasValue)
            {
                collection = await _unitOfWork.Repository<Collection>().GetByIdAsync(request.CollectionId.Value);
                if (collection == null)
                {
                    return new ServiceResponse<CommentModel>("error_collection_not_found");
                }
            }

            comment.Text = request.Text;
            _commentRepository.Update(comment);
            await _unitOfWork.SaveChangesAsync();

            // Response
            var response = new CommentModel
            {
                Id = comment.Id,
                Text = comment.Text,
                UserId = comment.UserId,
                AlbumId = comment.AlbumId,
                CollectionId = comment.CollectionId,
                CreatedOnUtc = comment.CreatedOnUtc,
                UpdatedOnUtc = comment.UpdatedOnUtc
            };

            return new ServiceResponse<CommentModel>(response);
        }

        public async Task<ServiceResponse<bool>> DeleteAsync(int id, int userId)
        {
            var comment = await _commentRepository.GetByIdAsync(id);
            if (comment == null || comment.IsDeleted)
            {
                return new ServiceResponse<bool>("error_comment_not_found");
            }

            var user = await _userRepository.GetByIdAsync(userId);
            if (user == null)
            {
                return new ServiceResponse<bool>("error_user_not_found");
            }

            if (comment.UserId != userId)
            {
                return new ServiceResponse<bool>("error_comment_not_belog_current_user");
            }

            comment.IsDeleted = true;
            _commentRepository.Update(comment);
            await _unitOfWork.SaveChangesAsync();

            return new ServiceResponse<bool>(true);
        }
    }
}
