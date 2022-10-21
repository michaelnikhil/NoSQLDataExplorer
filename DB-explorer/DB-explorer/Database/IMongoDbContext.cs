using MongoDB.Driver;

namespace DB_explorer.Database
{
    public interface IMongoDbContext
    {
        IMongoDatabase Database { get; }
        string CollectionName { get; set; }
    }
}