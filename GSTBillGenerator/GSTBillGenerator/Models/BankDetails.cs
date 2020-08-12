using SQLite;

namespace GSTBillGenerator.Models
{
    public class BankDetails
    {
        [PrimaryKey, AutoIncrement]
        public int id { get; set; }

        public string accountName { get; set; }

        public string bankName { get; set; }

        public string bankIFSCCode { get; set; }

        public string bankBranchName { get; set; }

        public string accountNo { get; set; }
    }
}
