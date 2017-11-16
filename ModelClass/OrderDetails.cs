using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelClass
{
    public class OrderDetails
    {
        public int id { get; set; }
        public int order_id { get; set; }
        public int order_line_number { get; set; }
        public int car_dtl_id { get; set; }
        public int booking_status_id { get; set; }
        public int booking_type_id { get; set; }
        public int payment_mode_id { get; set; }
        public int currency_id { get; set; }
        public string currency_code { get; set; }
        public int duration { get; set; }
        public int unit_price { get; set; }
        public int amount_paid { get; set; }
        public int total_amount { get; set; }
        public DateTime start_date { get; set; }
        public DateTime end_date { get; set; }
        public int active { get; set; }
        public int created_by { get; set; }
        public DateTime created_date { get; set; }
        public int modified_by { get; set; }
        public DateTime modified_date { get; set; }
    }
}
