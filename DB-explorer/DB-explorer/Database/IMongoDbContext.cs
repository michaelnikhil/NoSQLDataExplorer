using MongoDB.Driver;

namespace DB_explorer.Database
{
    public interface IMongoDbContext
    {
        IMongoDatabase Database { get; }
        IMongoDatabase DatabaseWrite { get; }
        string CollectionName { get; set; }
    }
}