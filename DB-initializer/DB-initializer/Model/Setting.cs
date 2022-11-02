using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace DB_initializer.Model
{
    public class Setting
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Parameter { get; set; }
        public string Value { get; set; }
        public Setting()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
    }
}
