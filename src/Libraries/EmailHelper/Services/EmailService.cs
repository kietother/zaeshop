using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Logging;
using EmailHelper.Models;

namespace EmailHelper.Services
{
    public class EmailService : IEmailService
    {
        private readonly ILogger<EmailService> _logger;
        private readonly EmailOptions _emailOptions;
        public EmailService(
            ILogger<EmailService> logger,
            EmailOptions emailOptions
        )
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _emailOptions = emailOptions;
        }

        public void SendMail(string subject, string body, List<string> toEmails, List<string>? ccEmails = null, List<EmailAttachment>? attachments = null)
        {
            HandleSendMail(subject, body, toEmails, ccEmails, attachments);
        }

        private bool HandleSendMail(string subject, string body, List<string> toEmails, List<string>? ccEmails = null, List<EmailAttachment>? attachments = null)
        {
            try
            {
                var message = new MailMessage
                {
                    From = new MailAddress(_emailOptions.SmtpUser ?? string.Empty, _emailOptions.MailFrom)
                };

                //to emails
                foreach (var email in toEmails.Where(email => !string.IsNullOrEmpty(email)))
                {
                    message.To.Add(email);
                }

                //cc emails
                if (ccEmails?.Any() == true)
                {
                    foreach (var email in ccEmails.Where(email => !toEmails.Contains(email) && !string.IsNullOrEmpty(email)))
                    {
                        message.CC.Add(email);
                    }
                }

                //attachment
                if (attachments?.Any() == true)
                {
                    foreach (var attachment in attachments)
                    {
                        message.Attachments.Add(new Attachment(new MemoryStream(attachment.Attachment), attachment.FileName));
                    }
                }

                message.IsBodyHtml = true;
                if (_emailOptions.Environment != "Production")
                {
                    message.Subject = $"[{_emailOptions.Environment}] " + subject;
                }
                else
                {
                    message.Subject = subject;
                }

                message.Body = body;

                using var client = new SmtpClient(_emailOptions.SmtpServer, _emailOptions.SmtpPort);
                client.Credentials = new NetworkCredential(_emailOptions.SmtpUser, _emailOptions.SmtpPassword);
                client.EnableSsl = true;
                client.Send(message);

                return true;
            }
            catch (Exception e)
            {
                _logger.LogError("An error during send email (SMTP)", e);
                return false;
            }
        }
    }
}