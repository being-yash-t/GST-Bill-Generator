using SQLite;

namespace GSTBillGenerator.Models
{
    public class FirmInfo
    {
        [PrimaryKey, AutoIncrement]
        public int id { get; set; }

        public string firmName { get; set; }

        public string address { get; set; }

        public int pinCode { get; set; }

        public string phoneNo { get; set; }

        public string GstTin { get; set; }

        public string stateName { get; set; }

        public string email { get; set; }
    }
}
