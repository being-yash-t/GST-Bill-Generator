namespace GstBillGenerator.Models
{
    class CartItem
    {
        string title { get; set; }

        int hsnCode { get; set; }

        double rate { get; set; }

        double quantity { get; set; }

        string per { get; set; }
    }
}
