using DB_explorer.Model;
using MongoDB.Driver;
using System.Linq.Expressions;

namespace DB_explorer.Database
{
    public class JsonRepository : IJsonRepository
    {
        private readonly IMongoDbContext _context;
        private readonly IMongoCollection<JsonResponse> Collection;


        public JsonRepository(IMongoDbContext context)
        {
            _context = context;
            Collection = _context.Database.GetCollection<JsonResponse>(_context.CollectionName);
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
            try
            {
                await Collection.InsertOneAsync(JsonResponse);
                return "JsonResponse added";

            }
            catch (MongoWriteException ex)
            {
                Console.WriteLine("Failed to insert JsonResponse : \n" + ex.Message);
                return ex.Message;
            }
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
    }
}