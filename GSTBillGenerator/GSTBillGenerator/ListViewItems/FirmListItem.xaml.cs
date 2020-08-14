using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace GstBillGenerator.ListViewItems
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class FirmListItem : ContentView
    {
        public FirmListItem()
        {
            InitializeComponent();
        }
    }
}