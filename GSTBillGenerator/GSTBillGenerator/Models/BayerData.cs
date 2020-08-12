using SQLite;

namespace GSTBillGenerator.Models
{
    public class BayerData
    {
        [PrimaryKey, AutoIncrement]
        public int id { get; set; }

        public string bayerName { get; set; }

        public string siteAddress { get; set; }

        public string GstTin { get; set; }

        public string stateName { get; set; }

        public string email { get; set; }
    }
}
