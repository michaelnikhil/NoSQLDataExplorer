using System.Threading.Tasks;
using System;

namespace DB_initializer.Job
{
    using DB_initializer.Database;

    class RunTasks
    {
        private readonly ICollectionService _collectionService;
        public RunTasks(ICollectionService collectionService)
        {
            _collectionService=collectionService;

        }


        public async Task Run()
        {
            try
            {
                bool success = 
                await _collectionService.CreateCollection()
                && await _collectionService.ImportSpreadsheets();

                if (success)
                {
                    Console.WriteLine("Run finished successfully");
                }
                else
                {
                    Console.WriteLine("Run not successful");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error running job : " + ex.Message);
            } 
        }

    }
}