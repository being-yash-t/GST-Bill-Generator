using GstBillGenerator.Pages;
using GstBillGenerator.Services;
using System;
using System.IO;
using Xamarin.Forms;

namespace GstBillGenerator
{
    public partial class App : Application
    {
        private static DatabaseHelper database;
        public static DatabaseHelper Database
        {
            get
            {
                if (database == null)
                    database = new DatabaseHelper(Path.Combine(
                        Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), 
                        "MainDb.db3")
                    );
                return database;
            }
        }

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
