using AutoMapper;
using DB_explorer.Model;
using DB_explorer.ViewModel;

namespace DB_explorer.MappingProfile
{
    public class Spreadsheet2Profile : Profile
    {
        public Spreadsheet2Profile()
        {
            //CreateMap<Spreadsheet2, Spreadsheet2ViewModel>()
            //    .ForMember(dest => dest.ItemsId, option => option.MapFrom(source => source.Items.Select(c => c.Id)));
        }
    }
}
