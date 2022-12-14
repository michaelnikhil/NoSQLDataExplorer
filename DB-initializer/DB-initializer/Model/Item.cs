using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace DB_initializer.Model
{
    public class Item
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id{ get; set; }
        public string  Name { get; set; }
        public string Label { get; set; }
        public Item()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
    }
}
