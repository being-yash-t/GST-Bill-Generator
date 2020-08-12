using SQLite;

namespace GstBillGenerator.Models
{
    public class CartItem
    {
        [PrimaryKey, AutoIncrement]
        public int id { get; set; }


        public string title { get; set; }

        public int hsnCode { get; set; }

        public int rate { get; set; }

        public double quantity { get; set; }

        public string per { get; set; }

        public double getAmount { get => rate * quantity; }
    }
}
