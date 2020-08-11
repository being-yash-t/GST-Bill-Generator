using GstBillGenerator.Pages;
using Xamarin.Forms;

namespace GstBillGenerator
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new HomeShell();
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
