using AutoMapper;
using DB_explorer.Model;
using DB_explorer.ViewModel;

namespace DB_explorer.MappingProfile
{
    public class SettingProfile : Profile
    {
        public SettingProfile()
        {
            CreateMap<Setting, SettingViewModel>();
        }
    }
}
