using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmailHelper.Models;

namespace EmailHelper.Services
{
    public interface IEmailService
    {
        void SendMail(string subject, string body, List<string> toEmails, List<string>? ccEmails = null, List<EmailAttachment>? attachments = null);
    }
}