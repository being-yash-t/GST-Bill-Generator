using Forms9Patch;
using System;
using Xamarin.Essentials;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace GstBillGenerator.Pages
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class GenerateBillPage : ContentPage
    {
        public GenerateBillPage()
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
                        await DisplayAlert("Pdf Generation failed", "", "Cancel");
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
                await DisplayAlert("Pdf Generation failed", "PDF Export is not available on this device", "Cancel");

        }

        private void SaveButtonClicked(object sender, EventArgs e)
        {

        }
    }
}