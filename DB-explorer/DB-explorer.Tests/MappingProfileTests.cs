using AutoMapper;
using DB_explorer.Database;
using DB_explorer.MappingProfile;
using Microsoft.AspNetCore.Routing;
using MongoDB.Driver;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB_explorer.Tests
{
    public class MappingProfileTests
    {
        [Fact]
        public void AutoMapper_Configuration_IsValid()
        {

            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<ItemProfile>();
                cfg.AddProfile<SettingProfile>();
                cfg.AddProfile<Spreadsheet1Profile>();
                cfg.AddProfile<Spreadsheet2Profile>();
                cfg.AddProfile<SpreadsheetTopProfile>();
            }

      
            );
            config.AssertConfigurationIsValid();
        }

    }
}
