using DB_explorer.Database;
using DB_explorer.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

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

        [HttpGet]
        public async Task<JsonResponse> Get()
        {
            JsonResponse results = await _repository.Get(null);
            return results;
        }

        [HttpPost]
        public async Task<string> Post(JsonResponse json)
        {
            return await _repository.Update(json);
        }
    }
}
