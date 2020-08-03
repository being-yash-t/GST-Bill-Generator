using System;

namespace GSTBillGenerator.Models
{
    class BillInfo
    {
        string billInfo { get; set; }

        DateTime billDate { get; set; }

        double cGstPercentage { get; set; }

        double sGstPercentage { get; set; }

        string bottomText { get; set; }

    }
}
