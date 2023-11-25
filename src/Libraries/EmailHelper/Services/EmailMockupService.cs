using EmailHelper.Models;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using MimeKit.Text;

namespace EmailHelper.Services
{
    public class EmailMockupService : IEmailService
    {
        private readonly EmailOptions _emailOptions;

        public EmailMockupService(
            EmailOptions emailOptions)
        {
            _emailOptions = emailOptions;
        }

        public async Task SendMailAsync(string subject, string body, List<string> toEmails,
            List<string>? ccEmails = null,
            List<EmailAttachment>? attachments = null)
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
            await smtp.ConnectAsync(_emailOptions.SmtpServer, _emailOptions.SmtpPort, SecureSocketOptions.StartTls);
            await smtp.AuthenticateAsync(_emailOptions.SmtpUser, _emailOptions.SmtpPassword);
            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);
        }
    }
}