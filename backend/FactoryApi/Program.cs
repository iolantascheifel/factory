using FactoryApi.Services;  
using Microsoft.Azure.Cosmos;  
  
var builder = WebApplication.CreateBuilder(args);  
  
// Add services to the container.  
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi  
builder.Services.AddOpenApi();  
builder.Services.AddControllers();  
builder.Services.AddEndpointsApiExplorer();  
builder.Services.AddSwaggerGen();  
builder.Services.AddSingleton<CosmosClient>(sp =>  
{  
    var configuration = sp.GetRequiredService<IConfiguration>();  
    var connectionString = configuration.GetSection("CosmosDb:ConnectionString").Value;  
    return new CosmosClient(connectionString);  
});  
builder.Services.AddSingleton<CosmosDbService>(sp =>  
{  
    var configuration = sp.GetRequiredService<IConfiguration>();  
    var cosmosClient = sp.GetRequiredService<CosmosClient>();  
    var databaseName = configuration.GetSection("CosmosDb:DatabaseName").Value;  
    var containerName = configuration.GetSection("CosmosDb:ContainerName").Value;  
    return new CosmosDbService(cosmosClient, databaseName, containerName);  
});  
  
var app = builder.Build();  
  
// Configure the HTTP request pipeline.  
if (app.Environment.IsDevelopment())  
{  
    app.UseSwagger();  
    app.UseSwaggerUI();  
}  
  
app.UseHttpsRedirection();  
  
app.UseHttpsRedirection();  
  
app.UseAuthorization();  
  
app.MapControllers();  
  
app.Run();