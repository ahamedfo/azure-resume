using Microsoft.Azure.WebJobs.Hosting;
using Microsoft.Extensions.Hosting;

namespace Company.Function
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new HostBuilder()
                .ConfigureWebJobs(webJobsBuilder =>
                {
                    // Add CosmosDB extension
                    webJobsBuilder.AddCosmosDB();
                })
                .ConfigureAppConfiguration((context, configBuilder) =>
                {
                    // Optionally configure app settings
                })
                .ConfigureLogging(logging =>
                {
                    // Optionally configure logging
                })
                .Build();

            host.Run();
        }
    }
}
