using Microsoft.Azure.Cosmos;
using FactoryApi.Models;
using System.Threading.Tasks;
using System;

namespace FactoryApi.Services
{
    public class CosmosDbService
    {
        private readonly Container _container;

        public CosmosDbService(CosmosClient cosmosClient, string databaseName, string containerName)
        {
            this._container = cosmosClient.GetContainer(databaseName, containerName);
        }

        public async Task AddItemAsync(MachineStateRequest request)
        {
            var document = new
            {
                id = Guid.NewGuid().ToString(),
                machineName = request.Machine,
                state = request.State,
                timestamp = DateTime.UtcNow
            };

            await this._container.CreateItemAsync(document, new PartitionKey(request.Machine));
        }
    }
}