using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DB_explorer.Model
{
    public class JsonResponse
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public Spreadsheet1 Spreadsheet1 { get; set; }
        public Spreadsheet2 Spreadsheet2 { get; set; }
    }
}
