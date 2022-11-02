using AutoMapper;
using DB_explorer.Model;
using DB_explorer.ViewModel;

namespace DB_explorer.MappingProfile
{
    public class Spreadsheet1Profile : Profile
    {
        public Spreadsheet1Profile()
        {
            //CreateMap<Spreadsheet1, Spreadsheet1ViewModel>()
            //    .ForMember(dest => dest.SettingsId, option => option.MapFrom(source => source.Settings.Select(c => c.Id)));
        }
    }
}
