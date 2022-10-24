using DB_explorer.Model;
using System.Linq.Expressions;

namespace DB_explorer.Database
{
    public interface IJsonRepository
    {
        Task<JsonResponse> Get(Expression<Func<JsonResponse, bool>> filter );
        Task<string> InsertOne(JsonResponse json);
        Task<string> InsertMany(IEnumerable<JsonResponse> jsons);
        Task Update(JsonResponse json);
    }
}
