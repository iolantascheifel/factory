using FactoryApi.Database;
using FactoryApi.Models;
using FactoryApi.Services;  
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);  

builder.Services.AddScoped<IMachineService, MachineService>();
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

// Seed the database with some initial data on startup.
// The `EnsureCreated` call ensures the database exists.
// The `if (!context.Machines.Any())` check prevents re-seeding.
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<AppDbContext>();
    
    context.Database.EnsureCreated();
    if (!context.Machines.Any())
    {
        context.Machines.Add(new Machine
        {
            Id = Guid.NewGuid(),
            Name = "CNC Machine 1",
            State = "Ready",
            Order = "N/A"
        });
        context.Machines.Add(new Machine
        {
            Id = Guid.NewGuid(),
            Name = "3D Printer 2",
            State = "Operational",
            Order = "N/A"
        });
        context.SaveChanges();
    }
}
  
app.Run();