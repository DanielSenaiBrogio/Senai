using Microsoft.EntityFrameworkCore;

public class SerasaContext(DbContextOptions<SerasaContext> options) : DbContext(options)
{
    public DbSet<Serasa.Models.SerasaModel> SerasaModel { get; set; } = default!;
}
