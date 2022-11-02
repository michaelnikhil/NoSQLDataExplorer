using DB_initializer.Model;
using System.IO;
using System.Text.Json;

namespace DB_initializer.Job
{
    public class ImportJson : IImportJson
    {
        public JsonResponse GetSpreadsheets()
        {
            var result = new JsonResponse();
            var path = Path.Combine(Directory.GetCurrentDirectory(), "data.json");
            var jsonstring = File.ReadAllText(path);
            if (!string.IsNullOrEmpty(jsonstring))
            {
                result =  JsonSerializer.Deserialize<JsonResponse>(jsonstring);
            }
            return result;
        }
    }
}
