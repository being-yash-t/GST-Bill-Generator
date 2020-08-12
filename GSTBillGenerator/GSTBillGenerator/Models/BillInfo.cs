using SQLite;
using System;

namespace GSTBillGenerator.Models
{
    public class BillInfo
    {
        [PrimaryKey, AutoIncrement]
        public int id { get; set; }

        public int billNo { get; set; }

        public DateTime billDate { get; set; }

        public double cGstPercentage { get; set; }

        public double sGstPercentage { get; set; }

        public string cityName { get; set; }
    }
}
