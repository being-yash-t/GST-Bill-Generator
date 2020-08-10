using Forms9Patch;
using GstBillGenerator.Models;
using GstBillGenerator.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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
            webView.Source = new HtmlWebViewSource { Html = "<h1>Loading...</h1>" };
            parseMockData();
        }

        async void parseMockData()
        {
            List<CartItem> cartItems = new List<CartItem>();
            for (int i = 0; i < 6; i++) cartItems.Add(new CartItem
            {
                title = $"Item {i}",
                hsnCode = 1244,
                rate = 1200,
                quantity = 12.55,
                per = "Brass"
            });

            await Task.Run(() => {
                webView.Source = new HtmlWebViewSource
                {
                    Html = cartItems.EnterCartItems(Properties.Resources.template1)
                };
            });
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
    }
}