using Forms9Patch;
using GstBillGenerator.Constants;
using GstBillGenerator.Models;
using GSTBillGenerator.Models;
using System.Collections.Generic;

namespace GstBillGenerator.Services
{
    static class ModelToHtmlHelpers
    {
        public static string EnterBillInfo(this BillInfo billInfo, string htmlToParse)
        {
            htmlToParse = htmlToParse.Replace(TemplateContentTags.InvoiceNo, billInfo.billNo.ToString());
            htmlToParse = htmlToParse.Replace(TemplateContentTags.InvoiceDate, billInfo.billDate.ToLocalTime().ToString("dd / MM / yyyy"));
            htmlToParse = htmlToParse.Replace(TemplateContentTags.CityName, billInfo.cityName);

            return htmlToParse;
        }

        public static string EnterBankDetails(this BankDetails bankDetails, string htmlToParse)
        {
            htmlToParse = htmlToParse.Replace(TemplateContentTags.BankOwnerName, bankDetails.accountName);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.BankAccountNo, bankDetails.accountNo);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.BankBranchName, bankDetails.bankBranchName);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.IFSCCode, bankDetails.bankIFSCCode);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.BankName, bankDetails.bankName);

            return htmlToParse;
        }

        public static string EnterFirmBayerInfo(FirmInfo firmInfo, BayerData bayerData, string htmlToParse)
        {
            htmlToParse = htmlToParse.Replace(TemplateContentTags.FirmName, firmInfo.firmName.ToUpper());
            htmlToParse = htmlToParse.Replace(TemplateContentTags.FirmAddress, firmInfo.address);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.FirmPhoneNo, firmInfo.phoneNo);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.FirmGstin, firmInfo.GstTin.ToUpper());
            htmlToParse = htmlToParse.Replace(TemplateContentTags.FirmState, firmInfo.stateName);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.FirmEmail, firmInfo.email);

            htmlToParse = htmlToParse.Replace(TemplateContentTags.BayerName, bayerData.bayerName);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.SiteAddress, bayerData.siteAddress);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.BayerGstin, bayerData.GstTin.ToUpper());
            htmlToParse = htmlToParse.Replace(TemplateContentTags.BayerState, bayerData.stateName);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.BayerEmail, bayerData.email);

            return htmlToParse;
        }

        public static string EnterCartItems(this List<CartItem> cartItems, BillInfo billInfo, string htmlToParse)
        {
            // strings to replace
            string srNos = "";
            string itemNames = "";
            string hsnCodes = "";
            string quantity = "";
            string rate = "";
            string per = "";
            string amount = "";
            double amountTotal = 0;

            // Loop on each item and append string
            for (int index = 0; index < cartItems.Count; index ++)
            {
                CartItem currentCartItem = cartItems[index];
                srNos += HtmlTags.CoverWithLI(index + ".");
                itemNames += HtmlTags.CoverWithLI(currentCartItem.title);
                hsnCodes += HtmlTags.CoverWithLI(currentCartItem.hsnCode.ToString());
                quantity += HtmlTags.CoverWithLI(string.Format("{0:N2}", currentCartItem.quantity));
                rate += HtmlTags.CoverWithLI(currentCartItem.rate.ToString());
                per += HtmlTags.CoverWithLI(currentCartItem.per);
                double currentCartItemAmount = currentCartItem.getAmount;
                amount += HtmlTags.CoverWithLI(string.Format("{0:N2}/-", currentCartItemAmount));
                amountTotal += currentCartItemAmount;
            };

            // Update template with columns
            htmlToParse = htmlToParse.Replace(TemplateContentTags.SrNos, srNos);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.Particulars, itemNames);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.HsnCodes, hsnCodes);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.QuantityColumn, quantity);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.RateColumn, rate);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.PerColumn, per);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.AmountsColumn, amount);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.Total, string.Format("{0:N2}/-", amountTotal));

            double totalTax = (billInfo.cGstPercentage + billInfo.sGstPercentage) / 100 * amountTotal;

            htmlToParse = htmlToParse.Replace(TemplateContentTags.CGSTValue, string.Format("{0:N2}/-", billInfo.cGstPercentage / 100 * amountTotal));
            htmlToParse = htmlToParse.Replace(TemplateContentTags.SGSTValue, string.Format("{0:N2}/-", billInfo.sGstPercentage / 100 * amountTotal));
            htmlToParse = htmlToParse.Replace(TemplateContentTags.GrandTotalValue, string.Format("{0:N2}/-", amountTotal + totalTax));

            return htmlToParse;
        }

    }
}
