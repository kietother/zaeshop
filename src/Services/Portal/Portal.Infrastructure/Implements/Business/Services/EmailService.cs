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
        private readonly IUnitOfWork _unitOfWork;
        private readonly IGenericRepository<User> _userRepository;
        private readonly ISendMailPublisher _sendMailPublisher;

        public EmailService(
           IUnitOfWork unitOfWork,
           ISendMailPublisher sendMailPublisher)
        {
            _unitOfWork = unitOfWork;
            _userRepository = unitOfWork.Repository<User>();
            _sendMailPublisher = sendMailPublisher;
        }

        public async Task SendEmailToFollowersAsync()
        {
            var followersSPremium = await _userRepository.GetQueryable()
                .Include(x => x.Followings).Where(x => x.RoleType == ERoleType.UserSuperPremium)
                .ToListAsync();
            var region = ERegion.en;

            foreach (var follower in followersSPremium)
            {
                var toEmail = string.Join(", ", follower.Email);
                var bodyList = new List<string>();

                foreach(var comic in follower.Followings)
                {
                    var newChap = comic.Album.Collections
                        .Where(x => x.CreatedOnUtc.Date == DateTime.UtcNow.Date)
                        .OrderByDescending(x => x.CreatedOnUtc)
                        .FirstOrDefault();

                    if (newChap == null)
                        continue;

                    var path = region == ERegion.en ? "en/comics" : "truyen-tranh";

                    var content = $"{comic.Album.Title} : " +
                        $"{newChap?.Title}." +
                        $" Link: https://fastscans.net/{path}/{comic.Album.FriendlyName}/{newChap?.FriendlyName}\n";

                    bodyList.Add(content);
                }

                if (bodyList.Count > 0)
                {
                    string subject = region == ERegion.vi ? "FAST SCANS THÔNG BÁO THEO DÕI" : "FAST SCANS FOLLOWING NOTIFICATION";
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
