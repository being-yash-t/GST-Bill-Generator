using GSTBillGenerator.Models;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace GstBillGenerator.Pages
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class AddEditFirmPage : ContentPage
    {
        public AddEditFirmPage(FirmInfo existingItem)
        {
            InitializeComponent();
        }
    }
}