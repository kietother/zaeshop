using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmailHelper.Models
{
    public class EmailAttachment
    {
        public string FileName { get; set; }

        public byte[] Attachment { get; set; }
    }
}