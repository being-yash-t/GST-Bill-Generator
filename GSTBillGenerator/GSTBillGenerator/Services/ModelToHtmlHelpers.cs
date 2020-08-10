using GstBillGenerator.Constants;
using GstBillGenerator.Models;
using System.Collections.Generic;

namespace GstBillGenerator.Services
{
    static class ModelToHtmlHelpers
    {

        public static string EnterCartItems(this List<CartItem> cartItems, string htmlToParse)
        {
            // strings to replace
            string srNos = "";
            string itemNames = "";
            string hsnCodes = "";
            string quantity = "";
            string rate = "";
            string per = "";
            string amount = "";

            for (int index = 0; index < cartItems.Count; index ++)
            {
                CartItem currentCartItem = cartItems[index];
                srNos += HtmlTags.CoverWithLI(index + ".");
                itemNames += HtmlTags.CoverWithLI(currentCartItem.title);
                hsnCodes += HtmlTags.CoverWithLI(currentCartItem.hsnCode.ToString());
                quantity += HtmlTags.CoverWithLI(currentCartItem.quantity.ToString());
                rate += HtmlTags.CoverWithLI(currentCartItem.rate.ToString());
                per += HtmlTags.CoverWithLI(currentCartItem.per);
                amount += HtmlTags.CoverWithLI(currentCartItem.getAmount.ToString());
            };

            // Update template with columns
            htmlToParse = htmlToParse.Replace(TemplateContentTags.SrNos, srNos);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.Particulars, itemNames);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.HsnCodes, hsnCodes);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.QuantityColumn, quantity);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.RateColumn, rate);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.PerColumn, per);
            htmlToParse = htmlToParse.Replace(TemplateContentTags.AmountsColumn, amount);

            return htmlToParse;
        }

    }
}
