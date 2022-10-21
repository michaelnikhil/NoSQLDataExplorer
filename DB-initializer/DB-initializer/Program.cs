using Microsoft.Extensions.Configuration;
using System;
using System.IO;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;
using MongoDB.Bson;
using Microsoft.Extensions.DependencyInjection;
using Serilog;
using DB_initializer.Database;
using DB_initializer.Job;

namespace DB_initializer
{
    class Program
    {
        private static IConfiguration Configuration { get; set; }

        static void Main(string[] args)
        {
            string environmentName = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            Console.WriteLine("Hello World!");
            Console.WriteLine("--- Mongo DB initialise ---");
    
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddEnvironmentVariables()
                .AddCommandLine(args);
               
            Log.Logger = new LoggerConfiguration() // initiate the logger configuration
                            .ReadFrom.Configuration(builder.Build()) // connect serilog to our configuration folder
                            .Enrich.FromLogContext() //Adds more information to our logs from built in Serilog 
                            .WriteTo.Console() // decide where the logs are going to be shown
                            .WriteTo.Debug()
                            .CreateLogger(); //initialise the logger

            Log.Logger.Information("Application Starting");

            BsonSerializer.RegisterSerializer(typeof(decimal), new DecimalSerializer(BsonType.Decimal128));
            BsonSerializer.RegisterSerializer(typeof(decimal?), new NullableSerializer<decimal>(new DecimalSerializer(BsonType.Decimal128)));


            Configuration = builder.Build();

            var serviceCollection = new ServiceCollection();
            serviceCollection.AddLogging();
            ConfigureServices(serviceCollection);

            var serviceProvider = serviceCollection.BuildServiceProvider();

            serviceProvider.GetService<RunTasks>().Run().Wait();
            Log.Logger.Information("\"--- Import finished ---");
        }

        private static void ConfigureServices(IServiceCollection services)
        {
            Log.Logger.Information("Configure services");
            services
            .Configure<MongoDbSettings>(options => Configuration.GetSection("MongoDbSettings").Bind(options))
            .AddTransient<IMongoDbContext,MongoDbContext>()
            .AddTransient(typeof(ICollectionService),typeof(CollectionService))
            .AddTransient(typeof(IImportJson), typeof(ImportJson))
            .AddTransient<RunTasks>();
        }

    }
}
