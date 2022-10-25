using DB_explorer.Model;
using DB_explorer.Services;
using Microsoft.AspNetCore.Mvc;

namespace DB_explorer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WriteController : ControllerBase
    {
        [HttpPost]
        public async Task Post(JsonResponse json)
        {
            await FileIOService.StreamWriteAsync(json, "data-copy.json");
        }
    }
}
