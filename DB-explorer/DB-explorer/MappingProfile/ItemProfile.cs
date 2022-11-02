using AutoMapper;
using DB_explorer.Model;
using DB_explorer.ViewModel;

namespace DB_explorer.MappingProfile
{
    public class ItemProfile : Profile
    {
        public ItemProfile()
        {
            CreateMap<Item, ItemViewModel>();
        }
    }
}
