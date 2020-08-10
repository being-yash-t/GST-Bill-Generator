using System;

namespace GSTBillGenerator.Models
{
    class BillInfo
    {
        public int billNo { get; set; }

        public DateTime billDate { get; set; }

        public double cGstPercentage { get; set; }

        public double sGstPercentage { get; set; }

        public string cityName { get; set; }
    }
}
