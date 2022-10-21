using System.Threading.Tasks;
using DB_initializer.Model;
using System.Collections.Generic;

namespace DB_initializer.Database
{
    public interface ICollectionService
    {
        Task<bool> CreateCollection();

        Task<bool> CollectionExists(string collectionName);

        Task<bool> ImportSpreadsheets();
        
    }
}