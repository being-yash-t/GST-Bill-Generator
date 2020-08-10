namespace GstBillGenerator.Models
{
    class CartItem
    {
        public string title { get; set; }

        public int hsnCode { get; set; }

        public double rate { get; set; }

        public double quantity { get; set; }

        public string per { get; set; }

        public double getAmount { get => rate * quantity; }
    }
}
