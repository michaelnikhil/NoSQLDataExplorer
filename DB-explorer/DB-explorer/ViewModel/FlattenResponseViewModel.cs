namespace DB_explorer.ViewModel
{
    public class FlattenResponseViewModel
    {
        public string JsonResponseId { get; set; }
        public string Spreadsheet1Id { get; set; }
        public string Spreadsheet2Id { get; set; }
        public Spreadsheet1ViewModel Spreadsheet1 { get; set; }
        public Spreadsheet2ViewModel Spreadsheet2 { get; set; }
        public List<SettingViewModel> Settings { get; set; }
        public List<ItemViewModel> Items { get; set; }

    }
}
