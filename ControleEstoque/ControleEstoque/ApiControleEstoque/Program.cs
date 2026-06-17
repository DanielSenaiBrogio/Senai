using Microsoft.EntityFrameworkCore;
using ApiControleEstoque.Data;
using Mapster;
using ApiControleEstoque.Contracts;
using ProdutoDomain;


var builder = WebApplication.CreateBuilder(args);


builder.Services.AddDbContext<ApiControleEstoqueContext>(options =>
    options.UseSqlServer(
        builder.Configuration
        .GetConnectionString("ApiControleEstoqueContext")
    ));


builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();


TypeAdapterConfig<PatchProdutoRequest, Produto>
    .NewConfig()
    .IgnoreNullValues(true);



if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseCors(p =>
    p.AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader()
);


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseStaticFiles();


app.Run();

