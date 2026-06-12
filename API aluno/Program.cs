using API_aluno.Data;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);


// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontEnd",
        policy =>
        {
            policy
            .WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});



// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Banco
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseInMemoryDatabase("AlunoBanco");
});


builder.Services.AddControllers();



var app = builder.Build();



app.UseSwagger();

app.UseSwaggerUI();


// IMPORTANTE: fica antes do MapControllers
app.UseCors("FrontEnd");


app.MapControllers();


app.Run();