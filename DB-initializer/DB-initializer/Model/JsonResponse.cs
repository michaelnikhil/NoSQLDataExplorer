using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace DB_initializer.Model
{
    public class JsonResponse
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public Spreadsheet1 Spreadsheet1 { get; set; }
        public Spreadsheet2 Spreadsheet2 { get; set; }

        public JsonResponse()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
    }
}
