using GstBillGenerator.Models;
using GSTBillGenerator.Models;
using SQLite;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GstBillGenerator.Services
{
    public class DatabaseHelper
    {
        readonly SQLiteAsyncConnection _sqlconnection;

        public DatabaseHelper(string dbPath)
        {
            _sqlconnection = new SQLiteAsyncConnection(dbPath);
            _sqlconnection.CreateTablesAsync(CreateFlags.None, new[] {
                typeof(BankDetails),
                typeof(FirmInfo),
                typeof(BayerData),
                typeof(CartItem),
                typeof(BillInfo)
            });
        }

        // Bank Details
        public Task<List<BankDetails>> AllBankDetails => _sqlconnection.Table<BankDetails>().ToListAsync();
        public Task<BankDetails> GetBankDetails(int id) => _sqlconnection.Table<BankDetails>().FirstOrDefaultAsync(t => t.id == id);
        public Task<int> DeleteBankDetails(int id) => _sqlconnection.DeleteAsync<BankDetails>(id);
        public Task<int> AddBankDetails(BankDetails data) => _sqlconnection.InsertAsync(data);

        // Firm Info
        public Task<List<FirmInfo>> AllFirmInfo => _sqlconnection.Table<FirmInfo>().ToListAsync();
        public Task<FirmInfo> GetFirmInfo(int id) => _sqlconnection.Table<FirmInfo>().FirstOrDefaultAsync(t => t.id == id);
        public Task<int> DeleteFirmInfo(int id) => _sqlconnection.DeleteAsync<FirmInfo>(id);
        public Task<int> AddFirmInfo(FirmInfo data) => _sqlconnection.InsertAsync(data);

        // Bayer Data
        public Task<List<BayerData>> AllBayerData => _sqlconnection.Table<BayerData>().ToListAsync();
        public Task<BayerData> GetBayerData(int id) => _sqlconnection.Table<BayerData>().FirstOrDefaultAsync(t => t.id == id);
        public Task<int> DeleteBayerData(int id) => _sqlconnection.DeleteAsync<BayerData>(id);
        public Task<int> AddBayerData(BayerData data) => _sqlconnection.InsertAsync(data);

        // Cart Item
        public Task<List<CartItem>> AllCartItem => _sqlconnection.Table<CartItem>().ToListAsync();
        public Task<CartItem> GetCartItem(int id) => _sqlconnection.Table<CartItem>().FirstOrDefaultAsync(t => t.id == id);
        public Task<int> DeleteCartItem(int id) => _sqlconnection.DeleteAsync<CartItem>(id);
        public Task<int> AddCartItem(CartItem data) => _sqlconnection.InsertAsync(data);

        // Bill Info
        public Task<List<BillInfo>> AllBillInfo => _sqlconnection.Table<BillInfo>().ToListAsync();
        public Task<BillInfo> GetBillInfo(int id) => _sqlconnection.Table<BillInfo>().FirstOrDefaultAsync(t => t.id == id);
        public Task<int> DeleteBillInfo(int id) => _sqlconnection.DeleteAsync<BillInfo>(id);
        public Task<int> AddBillInfo(BillInfo data) => _sqlconnection.InsertAsync(data);
    }
}
