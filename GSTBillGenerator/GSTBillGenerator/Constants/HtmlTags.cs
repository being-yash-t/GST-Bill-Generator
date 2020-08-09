namespace GstBillGenerator.Constants
{
    static class HtmlTags
    {
        public const string ListItemOpen = "<li>";
        public const string ListItemClose= "</li>";

        public static string CoverWithLI(string data) => ListItemOpen + data + ListItemClose;
    }
}
