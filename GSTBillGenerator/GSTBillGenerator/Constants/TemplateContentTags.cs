namespace GstBillGenerator.Constants
{
    static class TemplateContentTags
    {
        // Info Head
        public const string FirmName = "{FIRM_NAME}"; // Has multiple positions
        public const string BayerName = "{BAYER_NAME}";
        public const string FirmAddress = "{FIRM_ADDRESS}";
        public const string FirmPhoneNo = "{FIRM_PHONE_NO}";
        public const string SiteAddress = "{SITE_ADDRESS}";
        public const string FirmGstin = "{FIRM_GSTIN}";
        public const string BayerGstin = "{BAYER_GSTIN}";
        public const string FirmState = "{FIRM_STATE}";
        public const string BayerState = "{BAYER_STATE}";
        public const string FirmEmail = "{FIRM_EMAIL}";
        public const string BayerEmail = "{BAYER_EMAIL}";

        // Bill Info
        public const string InvoiceNo = "{INVOICE_NO}";
        public const string InvoiceDate = "{INVOICE_DATE}";

        // Items Table
        public const string SrNos = "{SR_NOS}"; // separated with <li></li>
        public const string Particulars = "{PARTICULARS}"; // separated with <li></li>
        public const string HsnCodes = "{HSN_CODES}"; // separated with <li></li>
        public const string QuantityColumn = "{QUANTITY_COL}"; // separated with <li></li>
        public const string RateColumn = "{RATE_COL}"; // separated with <li></li>
        public const string PerColumn = "{PER_COL}"; // separated with <li></li>
        public const string AmountsColumn = "{AMOUNTS_COL}"; // separated with <li></li>
        public const string Total = "{TOTAL_AMOUNT}";

        // Bank Info & GST Table
        public const string BankOwnerName = "{BANK_OWNER_NAME}";
        public const string BankName = "{BANK_NAME}";
        public const string BankAccountNo = "{BANK_ACCOUNT_NO}";
        public const string BankBranchName = "{BANK_BRANCH_NAME}";
        public const string IFSCCode = "{IFSC_CODE}";
        public const string CGSTValue = "{CGST_VALUE}";
        public const string SGSTValue = "{SGST_VALUE}";
        public const string RoundUpValue = "{ROUNDUP_VALUE}";
        public const string GrandTotalValue = "{GRAND_TOTAL_VALUE}";

        // Other
        public const string CityName = "{CITY_NAME}";
    }
}
