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

        [HttpGet]
        public async Task<JsonResponse> Get()
        {
            var results = await _repository.Get(null);
            return results;
        }

        [HttpPost]
        public async Task<IActionResult> Post(JsonResponse json)
        {
            var results = await _repository.InsertOne(json);
            return CreatedAtAction(nameof(Get), new { id = json.Id }, json);
        }
    }
}
