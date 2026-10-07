using Microsoft.EntityFrameworkCore;

public class APIBancoContext(DbContextOptions<APIBancoContext> options) : DbContext(options)
{
    public DbSet<APIBanco.Models.Usuario> Usuario { get; set; } = default!;
}
