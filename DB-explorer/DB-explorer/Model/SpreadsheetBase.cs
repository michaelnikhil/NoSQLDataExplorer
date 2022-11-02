using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
namespace DB_explorer.Model
{
    public class SpreadsheetBase
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
    }
}
