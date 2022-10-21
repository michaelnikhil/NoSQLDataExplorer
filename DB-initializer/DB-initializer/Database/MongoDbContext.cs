using Microsoft.Extensions.Options;
using MongoDB.Driver;


namespace DB_initializer.Database
{
    public class MongoDbContext : IMongoDbContext
    {
        public IMongoDatabase Database {get;}

        private readonly MongoDbSettings _settings;
        public MongoDbContext(IOptions<MongoDbSettings> mongoDbSettings)
        {
            _settings =  mongoDbSettings.Value;
            var client = new MongoClient(_settings.ConnectionString);
            Database = client.GetDatabase(_settings.DatabaseName);
        }

        public string CollectionName {    
            get { return _settings.CollectionName; }   
            set { CollectionName = value; }  
        }
    }    
}