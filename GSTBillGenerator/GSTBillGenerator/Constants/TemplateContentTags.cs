namespace GstBillGenerator.Constants
{
    static class TemplateContentTags
    {
        // Info Head
        const string FirmName = "{FIRM_NAME}"; // Has multiple positions
        const string BayerName = "{BAYER_NAME}";
        const string FirmAddress = "{FIRM_ADDRESS}";
        const string FirmPhoneNo = "{FIRM_PHONE_NO}";
        const string SiteAddress = "{SITE_ADDRESS}";
        const string FirmGstin = "{FIRM_GSTIN}";
        const string BayerGstin = "{BAYER_GSTIN}";
        const string FirmState = "{FIRM_STATE}";
        const string BayerState = "{BAYER_STATE}";
        const string FirmEmail = "{SITE_ADDRESS}";
        const string BayerEmail = "{BAYER_EMAIL}";

        // Bill Info
        const string InvoiceNo = "{INVOICE_NO}";
        const string InvoiceDate = "{INVOICE_DATE}";

        // Items Table
        const string SrNos = "{SR_NOS}"; // separated with <li></li>
        const string Particulars = "{PARTICULARS}"; // separated with <li></li>
        const string HsnCodes = "{HSN_CODES}"; // separated with <li></li>
        const string QuantityColumn = "{QUANTITY_COL}"; // separated with <li></li>
        const string RateColumn = "{RATE_COL}"; // separated with <li></li>
        const string PerColumn = "{PER_COL}"; // separated with <li></li>
        const string AmountsColumn = "{AMOUNTS_COL}"; // separated with <li></li>
        const string Total = "{TOTAL_AMOUNT}";

        // Bank Info & GST Table
        const string BankOwnerName = "{BANK_OWNER_NAME}";
        const string BankName = "{BANK_NAME}";
        const string BankAccountNo = "{BANK_ACCOUNT_NO}";
        const string BankBranchName = "{BANK_BRANCH_NAME}";
        const string IFSCCode = "{IFSC_CODE}";
        const string CGSTValue = "{CGST_VALUE}";
        const string SGSTValue = "{SGST_VALUE}";
        const string RoundUpValue = "{ROUNDUP_VALUE}";
        const string GrandTotalValue = "{GRAND_TOTAL_VALUE}";

        // Other
        const string CityName = "{CITY_NAME}";
    }
}
