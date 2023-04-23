using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmailHelper.Models
{
    public class EmailOptions
    {
        public string Environment { get; set; } = null!;
        public string SmtpServer { get; set; } = null!;
        public int SmtpPort { get; set; }
        public string SmtpUser { get; set; } = null!;
        public string SmtpPassword { get; set; } = null!;
        public string MailFrom { get; set; } = null!;
    }
}