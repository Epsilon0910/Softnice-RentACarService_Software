using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookCarAPI.Models
{
    public class carbook
    {
        public string Customername { get; set; }
        public string customeremail { get; set; }
        public string phonenumber { get; set; }
        public string alternatenumber { get; set; }
        public string Drivinglicense { get; set; }
        public string Passportnumber { get; set; }
        public string Amountpaid { get; set; }
        public string Createdate { get; set;}
        public string Paymentstatus { get; set; }
        public Boolean paymenttype { get; set; }
        public string Country { get; set; }
    }
}