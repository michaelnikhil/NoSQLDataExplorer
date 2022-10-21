using System.Threading.Tasks;
using System;
using MongoDB.Bson;
using MongoDB.Driver;
using DB_initializer.Model;
using DB_initializer.Job;

namespace DB_initializer.Database
{
    public class CollectionService : ICollectionService
    {
        private readonly IMongoDbContext _context;
        private string latestCollectionName;
        private readonly IImportJson _import;
        public CollectionService(IMongoDbContext context, IImportJson import)
        {
            _context = context;
            _import = import;
            latestCollectionName = _context.CollectionName;
        }

        public async Task<bool> CreateCollection()
        {
            Console.WriteLine("Create collection");
            
            if(await CollectionExists(latestCollectionName)){
                Console.WriteLine("Collection already exists");
                latestCollectionName += "_" +  DateTime.Now.ToString();
            }

            await _context.Database.CreateCollectionAsync(latestCollectionName);
            return true;
        }

        public async Task<bool> CollectionExists(string collectionName)
        {
            var filter = new BsonDocument("name", collectionName);
            IAsyncCursor<BsonDocument> collections = await _context.Database.ListCollectionsAsync(new ListCollectionsOptions { Filter = filter });
            return await collections.AnyAsync();
        }

        public async Task<bool> ImportSpreadsheets()
        {

            var sheets = _import.GetSpreadsheets();
            try
            {
                await _context.Database.GetCollection<JsonResponse> (latestCollectionName).InsertOneAsync(sheets);
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Could not import items :" + ex.Message);
                return false;
            }
        }
    }
}