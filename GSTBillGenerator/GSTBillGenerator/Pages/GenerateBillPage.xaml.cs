using Forms9Patch;
using GstBillGenerator.Models;
using GstBillGenerator.Services;
using GSTBillGenerator.Models;
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
                quantity = 12.54,
                per = "Brass"
            });

            await Task.Run(() => {
                BillInfo billInfo = new BillInfo
                {
                    cityName = "Mumbai",
                    cGstPercentage = 2.5,
                    sGstPercentage = 2.5,
                    billDate = DateTime.Now,
                    billNo = 32
                };

                string htmlSource = cartItems.EnterCartItems(billInfo, Properties.Resources.template1);
              
                htmlSource = billInfo.EnterBillInfo(htmlSource);

                htmlSource = ModelToHtmlHelpers.EnterFirmBayerInfo(
                    new FirmInfo 
                    {
                        firmName = "dw tsk Jsk ln", 
                        address = "Sad param nagar, Switzz, Dombewalli",
                        phoneNo = "9422245630",
                        GstTin = "abcdefghijklmnopqrst",
                        stateName = "Maharashtra - 27",
                        email = "someeeePurnn@somthing.com"
                    },
                    new BayerData 
                    { 
                        bayerName = "Gayatri Enterprise",
                        siteAddress = "NCYP College, College Group, Model Colony, Dombewalli",
                        GstTin = "uvwxyz1234667890",
                        stateName = "Maharashtra - 27",
                        email = "somehting@hehehe.com"
                    },
                    htmlSource
                );

                htmlSource = new BankDetails 
                {
                    bankName = "Some Bank Name",
                    accountName = "Some Bank User",
                    accountNo = "23425435345345",
                    bankBranchName = "Some Branch",
                    bankIFSCCode = "GSD45345"
                    
                }.EnterBankDetails(htmlSource);

                webView.Source = new HtmlWebViewSource { Html = htmlSource };
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