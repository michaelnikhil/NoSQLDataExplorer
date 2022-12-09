using DB_explorer.Database;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB_explorer.Tests
{
    public class MongoDBContextTests
    {
        private readonly Mock<IOptions<MongoDbSettings>> _mockOptions;
        private readonly Mock<IMongoDatabase> _mockDB;
        private readonly Mock<IMongoClient> _mockClient;

        public MongoDBContextTests()
        {
            _mockOptions = new Mock<IOptions<MongoDbSettings>>();
            _mockDB = new Mock<IMongoDatabase>();
            _mockClient = new Mock<IMongoClient>();
        }


        [Fact]
        public void MongoDBContext_constructor_success()
        {
            var settings = new MongoDbSettings()
            {
                CollectionName = "testCollection",
                ConnectionString = "mongodb://tes123 ",
                DatabaseName = "TestDB",
                DatabaseNameWrite = "TestDBWrite"
            };

            _mockOptions.Setup(s => s.Value).Returns(settings);
            _mockClient.Setup(c => c
            .GetDatabase(_mockOptions.Object.Value.DatabaseName, null))
                .Returns(_mockDB.Object);

            //Act 
            var context = new MongoDbContext(_mockOptions.Object);

            //Assert 
            Assert.NotNull(context);

        }
    }
}
