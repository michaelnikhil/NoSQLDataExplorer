using DB_explorer.Model;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace DB_explorer.Services
{
    public static class FileIOService
    {
        private static readonly JsonSerializerOptions _options = 
            new() { DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull };

        public static void WriteToJson(object obj, string filename)
        {
            var options = new JsonSerializerOptions(_options)
            {
                WriteIndented = true
            };
            var jsonString = JsonSerializer.Serialize(obj, options);
            File.WriteAllText(filename, jsonString);
        }

        public static async Task StreamWriteAsync(JsonResponse obj, string fileName)
        {
            var options = new JsonSerializerOptions(_options)
            {
                WriteIndented = true
            };
            await using var fileStream = File.Create(fileName);
            await JsonSerializer.SerializeAsync(fileStream, obj, options);
        }
    }
}
