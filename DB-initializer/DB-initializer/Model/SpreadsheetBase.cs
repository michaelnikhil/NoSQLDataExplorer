using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DB_initializer.Model
{
    public class SpreadsheetBase
    {

        public string Name { get; set; }
        public string Description { get; set; }
    }
}
