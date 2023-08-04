using EmailHelper.Models;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Logging;
using MimeKit;
using MimeKit.Text;

namespace EmailHelper.Services
{
    public class EmailMockupService : IEmailService
    {
        private readonly ILogger<EmailMockupService> _logger;
        private readonly EmailOptions _emailOptions;

        public EmailMockupService(
            ILogger<EmailMockupService> logger,
            EmailOptions emailOptions)
        {
            _logger = logger;
            _emailOptions = emailOptions;
        }

        public void SendMail(string subject, string body, List<string> toEmails,
            List<string>? ccEmails = null,
            List<EmailAttachment>? attachments = null)
        {
            try
            {
                // create message
                var email = new MimeMessage();
                email.From.Add(MailboxAddress.Parse(_emailOptions.MailFrom));

                foreach (var toEmail in toEmails)
                {
                    email.To.Add(MailboxAddress.Parse(toEmail));
                }

                email.Subject = subject;
                email.Body = new TextPart(TextFormat.Html) { Text = body };

                // send email
                using var smtp = new SmtpClient();
                smtp.Connect(_emailOptions.SmtpServer, _emailOptions.SmtpPort, SecureSocketOptions.StartTls);
                smtp.Authenticate(_emailOptions.SmtpUser, _emailOptions.SmtpPassword);
                smtp.Send(email);
                smtp.Disconnect(true);
            }
            catch (Exception e)
            {
                _logger.LogError("An error during send email (SMTP)", e);
            }
        }
    }
}