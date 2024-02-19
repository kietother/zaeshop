using Common.Interfaces.Messaging;
using Common.Shared.Models.Emails;
using Portal.Domain.AggregatesModel.UserAggregate;
using Portal.Domain.Enums;
using Portal.Domain.Interfaces.Business.Services;
using Portal.Domain.SeedWork;

namespace Portal.Infrastructure.Implements.Business.Services
{
    public class EmailService : IEmailService
    {
        private readonly IGenericRepository<User> _userRepository;
        private readonly ISendMailPublisher _sendMailPublisher;

        public EmailService(
           IUnitOfWork unitOfWork,
           ISendMailPublisher sendMailPublisher)
        {
            _userRepository = unitOfWork.Repository<User>();
            _sendMailPublisher = sendMailPublisher;
        }

        public async Task SendEmailToFollowersAsync()
        {
            var followersSPremium = await _userRepository.GetQueryable()
                .Include(x => x.Followings).Where(x => x.RoleType == ERoleType.UserSuperPremium)
                .ToListAsync();

            foreach (var follower in followersSPremium)
            {
                var region = follower.Region;
                var toEmail = string.Join(", ", follower.Email);
                var bodyList = follower.Followings
                    .Select(comic => comic.Album)
                    .Select(album =>
                    {
                        var newChap = album.Collections
                            .Where(x => x.CreatedOnUtc.Date == DateTime.UtcNow.Date)
                            .OrderByDescending(x => x.CreatedOnUtc)
                            .FirstOrDefault();

                        if (newChap == null)
                            return null;

                        var path = region switch
                        {
                            ERegion.en => "en/comics",
                            ERegion.vi => "truyen-tranh",
                            _ => ""
                        };

                        return $"{album.Title} : " +
                               $"{newChap?.Title}." +
                               $" Link: https://fastscans.net/{path}/{album.FriendlyName}/{newChap?.FriendlyName}\n";
                    })
                    .Where(content => content != null)
                    .ToList();

                if (bodyList.Count > 0)
                {
                    var subject = region switch
                    {
                        ERegion.en => "FAST SCANS FOLLOWING NOTIFICATION",
                        ERegion.vi => "FAST SCANS THÔNG BÁO THEO DÕI",
                        _ => ""
                    };

                    string body = string.Join("\n", bodyList);

                    var message = new SendEmailMessage
                    {
                        Subject = subject,
                        Body = body,
                        ToEmails = toEmail!.Split(',').ToList(),
                        CcEmails = null
                    };

                    await _sendMailPublisher.SendMailAsync(message);
                }
            }
        }
    }
}
