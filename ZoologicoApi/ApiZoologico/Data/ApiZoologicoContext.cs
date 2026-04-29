using Microsoft.EntityFrameworkCore;
using AnimalDomain;

namespace ApiZoologico.Data;

public class ApiZoologicoContext : DbContext
{
    public ApiZoologicoContext(DbContextOptions<ApiZoologicoContext> options)
        : base(options)
    {
    }

    public DbSet<Genero> Generos { get; set; } = default!;

    public DbSet<Especie> Especies { get; set; } = default!;
}
