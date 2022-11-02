using AutoMapper;
using DB_explorer.Model;
using DB_explorer.ViewModel;

namespace DB_explorer.MappingProfile
{
    public class FlattenResponseProfile : Profile
    {
        public FlattenResponseProfile()
        {
            CreateMap<JsonResponse, FlattenResponseViewModel>()
            .ForMember(dest => dest.JsonResponseId, option => option.MapFrom(source => source.Id))
            .ForMember(dest => dest.Spreadsheet1Id, option => option.MapFrom(source => source.Spreadsheet1.Id))
            .ForMember(dest => dest.Spreadsheet2Id, option => option.MapFrom(source => source.Spreadsheet2.Id));

            CreateMap<Spreadsheet1, Spreadsheet1ViewModel>()
                .ForMember(dest => dest.SettingsId, option => option.MapFrom(source => source.Settings.Select(c => c.Id)));              
                
            CreateMap<Spreadsheet2, Spreadsheet2ViewModel>()
                .ForMember(dest => dest.ItemsId, option => option.MapFrom(source => source.Items.Select(c => c.Id)));

            CreateMap<Setting, SettingViewModel>();

            CreateMap<Item, ItemViewModel>();
        }
    }
}
