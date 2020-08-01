using Xamarin.Forms;
using Forms9Patch;
using System;
using Xamarin.Essentials;

namespace GSTBillGenerator.Views
{
    public partial class PrintBillPage : ContentPage
    {
        public PrintBillPage()
        {
            InitializeComponent();

            WebViewPrintEffect.ApplyTo(webView);
            webView.Source = new HtmlWebViewSource
            {
                Html = @"
<!DOCTYPE html>
<html>
<body>
<h1>Convert to PDF</h1>
<p>This html will be converted to a PDF.</p>
</body>
</html>
"
            };


        }

        async void ShareButton_Clicked(object sender, EventArgs e)
        {
            if (ToPdfService.IsAvailable)
            {
                if (await webView.ToPdfAsync(DateTime.Now.ToString("dd/MM/yyyy_hh/mm")) is ToFileResult pdfResult)
                {
                    if (pdfResult.IsError)
                        using (Toast.Create("PDF Failure", pdfResult.Result)) { }
                    else
                    {
                        await Share.RequestAsync(new ShareFileRequest
                        {
                            Title = Title,
                            File = new ShareFile(pdfResult.Result)
                        });
                    }
                }
            }
            else
                using (Toast.Create(null, "PDF Export is not available on this device")) { }
        }

        private void SaveButtonClicked(object sender, EventArgs e)
        {

        }
    }
}
