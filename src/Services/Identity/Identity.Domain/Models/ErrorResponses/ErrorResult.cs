using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Identity.Domain.Models.ErrorResponses
{
    public class ErrorResult
    {
        public string Description { get; set; }

        public static ErrorResult Create() {
            return new ErrorResult();
        }
    }
}