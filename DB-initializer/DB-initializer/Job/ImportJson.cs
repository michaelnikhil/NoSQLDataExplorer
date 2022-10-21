using CsvHelper;
using DB_initializer.Model;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Microsoft.AspNetCore.Hosting.Internal.HostingApplication;

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
                result = JsonConvert.DeserializeObject<JsonResponse>(jsonstring);
            }
            return result;
        }
    }
}
