using Forms9Patch;
using GstBillGenerator.Constants;
using GstBillGenerator.Models;
using GSTBillGenerator.Models;
using System;
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
            for (int index = 0; index < cartItems.Count; index++)
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
            htmlToParse = htmlToParse.Replace(TemplateContentTags.GrandTotalInWords, ConvertToIndianRupeesText((int)(amountTotal + totalTax)));

            return htmlToParse;
        }

        public static string ConvertToIndianRupeesText(double numbers, bool paisaconversion = false)
        {
            System.Diagnostics.Debug.WriteLine(numbers);
            var pointindex = numbers.ToString().IndexOf(".");
            var paisaamt = 0;
            if (pointindex > 0)
                paisaamt = Convert.ToInt32(numbers.ToString().Substring(pointindex + 1, 2));

            int number = Convert.ToInt32(numbers);

            if (number == 0) return "Zero";
            if (number == -2147483648) return "Minus Two Hundred and Fourteen Crore Seventy Four Lakh Eighty Three Thousand Six Hundred and Forty Eight";
            int[] num = new int[4];
            int first = 0;
            int u, h, t;
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            if (number < 0)
            {
                sb.Append("Minus ");
                number = -number;
            }
            string[] words0 = { "", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine " };
            string[] words1 = { "Ten ", "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ", "Seventeen ", "Eighteen ", "Nineteen " };
            string[] words2 = { "Twenty ", "Thirty ", "Forty ", "Fifty ", "Sixty ", "Seventy ", "Eighty ", "Ninety " };
            string[] words3 = { "Thousand ", "Lakh ", "Crore " };
            num[0] = number % 1000; // units
            num[1] = number / 1000;
            num[2] = number / 100000;
            num[1] = num[1] - 100 * num[2]; // thousands
            num[3] = number / 10000000; // crores
            num[2] = num[2] - 100 * num[3]; // lakhs
            for (int i = 3; i > 0; i--)
            {
                if (num[i] != 0)
                {
                    first = i;
                    break;
                }
            }
            for (int i = first; i >= 0; i--)
            {
                if (num[i] == 0) continue;
                u = num[i] % 10; // ones
                t = num[i] / 10;
                h = num[i] / 100; // hundreds
                t = t - 10 * h; // tens
                if (h > 0) sb.Append(words0[h] + "Hundred ");
                if (u > 0 || t > 0)
                {
                    if (h > 0 || i == 0) sb.Append("and ");
                    if (t == 0)
                        sb.Append(words0[u]);
                    else if (t == 1)
                        sb.Append(words1[u]);
                    else
                        sb.Append(words2[t - 2] + words0[u]);
                }
                if (i != 0) sb.Append(words3[i - 1]);
            }

            if (paisaamt == 0 && paisaconversion == false)
            {
                sb.Append("ruppes only.");
            }
            else if (paisaamt > 0)
            {
                var paisatext = ConvertToIndianRupeesText(paisaamt, true);
                sb.AppendFormat("rupees {0} paise only.", paisatext);
            }
            return sb.ToString().TrimEnd();
        }

    }

}
