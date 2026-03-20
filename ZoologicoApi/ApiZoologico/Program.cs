using AnimalDomain;
using ApiZoologico.Data;
using ApiZoologico.Dtos.Especie;
using Mapster;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApiZoologicoContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ApiZoologicoContext") ?? throw new InvalidOperationException("Connection string 'ApiZoologicoContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

//// Configuração do Mapster
TypeAdapterConfig<PatchEspecieRequest, Especie>.NewConfig().IgnoreNullValues(true);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
