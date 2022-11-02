using AutoMapper;
using DB_explorer.Model;
using DB_explorer.ViewModel;

namespace DB_explorer.MappingProfile
{
    public class SpreadsheetTopProfile : Profile
    {
        public SpreadsheetTopProfile()
        {
            CreateMap<JsonResponse, SpreadsheetTopViewModel>()
                    .ForMember(dest => dest.JsonResponseId, option => option.MapFrom(source => source.Id))
                    .ForMember(dest => dest.Spreadsheet1Id, option => option.MapFrom(source => source.Spreadsheet1.Id))
                    .ForMember(dest => dest.Spreadsheet2Id, option => option.MapFrom(source => source.Spreadsheet2.Id));
        }


    }
}
