using FactoryApi.Database;
using FactoryApi.Services;  
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);  

builder.Services.AddOpenApi();  
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});


builder.Services.AddScoped<IMachineService, MachineService>();

builder.Services.AddEndpointsApiExplorer();  
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Factory API", Version = "v1" });
});
builder.Services.AddDbContext<AppDbContext>(option =>
{
    option.UseSqlite("Data Source=factory.db");

});


var app = builder.Build();  

if (app.Environment.IsDevelopment())  
{  
    app.UseSwagger();  
    app.UseSwaggerUI();  
}  
  
app.UseHttpsRedirection();  
  
app.UseHttpsRedirection();  
  
app.UseAuthorization();  

app.UseCors("AllowSpecificOrigin");
  
app.MapControllers();  
  
app.Run();