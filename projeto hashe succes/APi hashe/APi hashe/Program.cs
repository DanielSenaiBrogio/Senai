var builder = WebApplication.CreateBuilder(args);

// 1. CONFIGURAÇÃO DO CORS - Aqui a gente define a regra
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirTudo", policy =>
    {
        policy.AllowAnyOrigin()  // Permite qualquer site (inclusive seu localhost:3000)
              .AllowAnyHeader()  // Permite qualquer cabeçalho (como o Content-Type)
              .AllowAnyMethod(); // Permite qualquer método (GET, POST, etc)
    });
});

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();

// 2. ATIVAÇÃO DO CORS - A ordem aqui é CRUCIAL!
// O UseCors deve vir DEPOIS de builder.Build() e ANTES de UseAuthorization
app.UseCors("PermitirTudo");

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();