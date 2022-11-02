using AutoMapper;
using DB_explorer.Database;
using DB_explorer.Model;
using DB_explorer.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace DB_explorer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SpreadsheetController : ControllerBase
    {
        private readonly IJsonRepository _repository;
        public readonly IMapper _mapper;
        public SpreadsheetController(IMapper mapper, IJsonRepository repository)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<JsonResponse> Get()
        {
            JsonResponse results = await _repository.Get(null);
            return results;
        }

        [HttpGet("flat")]
        public async Task<FlattenResponseViewModel> GetFlat()
        {
            JsonResponse results = await _repository.Get(null);
            var flattenResponse = _mapper.Map<FlattenResponseViewModel>(results);
            var settings = _mapper.Map<List<SettingViewModel>>(results.Spreadsheet1.Settings);
            var items = _mapper.Map<List<ItemViewModel>>(results.Spreadsheet2.Items);
            flattenResponse.Items = items;
            flattenResponse.Settings = settings;

            return flattenResponse;
        }

        [HttpPost]
        public async Task<string> Post(JsonResponse json)
        {
            return await _repository.Update(json);
        }
    }
}
