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

        private readonly IImportJson _import;
        public CollectionService(IMongoDbContext context, IImportJson import)
        {
            _context = context;
            _import = import;
        }

        public async Task<bool> CreateCollection()
        {
            Console.WriteLine("Create collection");
            if(!await CollectionExists(_context.CollectionName)){
                await _context.Database.CreateCollectionAsync(_context.CollectionName);
            }
            else{
                Console.WriteLine("Collection already exists");
            }
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
                await _context.Database.GetCollection<JsonResponse> (_context.CollectionName).InsertOneAsync(sheets);
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