using DB_explorer.Model;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections;
using System.Linq.Expressions;

namespace DB_explorer.Database
{
    public class JsonRepository : IJsonRepository
    {
        private readonly IMongoDbContext _context;
        private readonly IMongoCollection<JsonResponse> Collection;
        private readonly IMongoCollection<JsonResponse> Collection_write;


        public JsonRepository(IMongoDbContext context)
        {
            _context = context;
            Collection = _context.Database.GetCollection<JsonResponse>(_context.CollectionName);
            Collection_write = _context.DatabaseWrite.GetCollection<JsonResponse>(_context.CollectionName);
        }

        public async Task<JsonResponse> Get(Expression<Func<JsonResponse, bool>> filter)
        {
            {
                try
                {
                    FilterDefinition<JsonResponse> filterDefinition = filter != null
                                ? Builders<JsonResponse>.Filter.Where(filter)
                                : Builders<JsonResponse>.Filter.Empty;
                    IFindFluent<JsonResponse, JsonResponse> entity = Collection.Find(filterDefinition);
                    return await entity.FirstAsync();
                }
                catch (Exception e)
                {
                    Console.WriteLine("Failed to get collection :" + e.Message);
                    throw new Exception("Mongodb ex " + e.Message);
                }
            }
        }

        public async Task<string> InsertOne(JsonResponse JsonResponse)
        {
            if (!await CollectionExists(_context.DatabaseWrite, _context.CollectionName))
            {
                await CreateCollection(_context.DatabaseWrite, _context.CollectionName);
            }
            return "test";
            //try
            //{
            //    await Collection.InsertOneAsync(JsonResponse);
            //    return "JsonResponse added";

            //}
            //catch (MongoWriteException ex)
            //{
            //    Console.WriteLine("Failed to insert JsonResponse : \n" + ex.Message);
            //    return ex.Message;
            //}
        }

        public async Task<string> InsertMany(IEnumerable<JsonResponse> JsonResponses)
        {
            try
            {
                await Collection.InsertManyAsync(JsonResponses);
                return "JsonResponses added";

            }
            catch (MongoWriteException ex)
            {
                Console.WriteLine("Failed to insert JsonResponses : \n" + ex.Message);
                return ex.Message;
            }
        }

        public async Task Update(JsonResponse JsonResponse)
        {
            try
            {
                await Collection.ReplaceOneAsync(filter: d => d.Id == JsonResponse.Id, replacement: JsonResponse);
            }
            catch (Exception e)
            {
                Console.WriteLine("Could not update JsonResponse : " + e.Message);
            }
        }

        public async Task<bool> CollectionExists(IMongoDatabase database, string collectionName)
        {
            var filter = new BsonDocument("name", collectionName);
            IAsyncCursor<BsonDocument> collections = await database.ListCollectionsAsync(new ListCollectionsOptions { Filter = filter });
            return await collections.AnyAsync();
        }

        public async Task<bool> CreateCollection(IMongoDatabase database, string collectionName)
        {
            Console.WriteLine("Create collection {0} on DB {1}", collectionName, database.DatabaseNamespace);

            await database.CreateCollectionAsync(collectionName);
            return true;
        }
    }
}