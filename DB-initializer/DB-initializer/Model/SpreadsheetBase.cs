using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DB_initializer.Model
{
    public class SpreadsheetBase
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public SpreadsheetBase()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
    }
}
