using MongoDB.Driver;

namespace DB_initializer.Database
{
    public interface  IMongoDbContext
    {
        IMongoDatabase Database {get;}
        string CollectionName {get; set;}
    }
}