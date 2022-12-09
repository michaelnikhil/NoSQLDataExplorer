using DB_explorer.Database;
using MongoDB.Driver;
using Moq;

namespace DB_explorer.Tests
{
    public class JsonRepositoryTests
    {
        private readonly Mock<IMongoDbContext> _mockContext;
        private readonly Mock<IMongoDatabase> _mockDB;

        public JsonRepositoryTests()
        {
            _mockContext = new Mock<IMongoDbContext>();
            _mockDB = new Mock<IMongoDatabase>();
        }

        [Fact]
        public void JsonRepository_constructor_success()
        {
            //Arrange
            _mockContext.Setup(s => s.CollectionName).Returns(It.IsAny<string>);
            _mockContext.Setup(s => s.Database).Returns(_mockDB.Object);
            _mockContext.Setup(s => s.DatabaseWrite).Returns(_mockDB.Object);

            //Act 
            var context = new JsonRepository(_mockContext.Object);

            //Assert 
            Assert.NotNull(context);
        }
    }
}
