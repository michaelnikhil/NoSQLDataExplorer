using DB_explorer.Database;
using DB_explorer.Model;
using Microsoft.AspNetCore.Mvc;

namespace DB_explorer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SpreadsheetController : ControllerBase
    {
        private readonly IJsonRepository _repository;
        public SpreadsheetController(IJsonRepository repository)
        {
            _repository = repository;
        }

        // GET: Categories
        [HttpGet]
        public async Task<JsonResponse> Get()
        {
            var results = await _repository.Get(null);
            return results;
        }
    }
}
