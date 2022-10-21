using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB_initializer.Model
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
