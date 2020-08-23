using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace GstBillGenerator.Pages
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class FirmDetailsList : ContentPage
    {
        public FirmDetailsList()
        {
            InitializeComponent();
        }

        private void CreateClicked(object sender, EventArgs e)
        {
            Shell.Current.Navigation.PushAsync(new AddEditFirmPage(null));
        }
    }
}