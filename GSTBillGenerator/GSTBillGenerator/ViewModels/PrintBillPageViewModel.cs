using Prism.Commands;
using Prism.Mvvm;
using Prism.Navigation;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GSTBillGenerator.ViewModels
{
    public class PrintBillPageViewModel : ViewModelBase 
    {
        public PrintBillPageViewModel(INavigationService navigationService) : base(navigationService)
        {
            Title = "Save as pdf";
        }
    }
}
