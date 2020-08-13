using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace GstBillGenerator.Pages
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class HomeShell : Shell
    {
        public HomeShell()
        {
            InitializeComponent();
            Routing.RegisterRoute("aboutPage", typeof(AboutPage));
        }

        private void OpenAboutButton(object sender, System.EventArgs e)
        {
            Shell.Current.Navigation.PushAsync(new AboutPage());
            //Shell.Current.GoToAsync($"{Shell.Current.CurrentState.Location}/aboutPage");
            Shell.Current.FlyoutIsPresented = false;
        }
    }
}