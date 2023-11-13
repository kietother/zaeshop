using Common.Shared.Models.Emails;
using EmailHelper.Services;
using MassTransit;

namespace HangFireServer.Messaging.Comsumers
{
    public class SendEmailComsumer : IConsumer<SendEmailMessage>
    {
        private readonly IEmailService _emailService;

        public SendEmailComsumer(IEmailService emailService)
        {
            _emailService = emailService;
        }

        public async Task Consume(ConsumeContext<SendEmailMessage> context)
        {
            var sendMailMessage = context.Message;

            await _emailService.SendMailAsync(sendMailMessage.Subject, sendMailMessage.Body,
                sendMailMessage.ToEmails, sendMailMessage.CcEmails,
                sendMailMessage.Attachments?.Select(x => new EmailHelper.Models.EmailAttachment
                {
                    FileName = x.FileName,
                    Attachment = x.Attachment
                }).ToList());
        }
    }
}
