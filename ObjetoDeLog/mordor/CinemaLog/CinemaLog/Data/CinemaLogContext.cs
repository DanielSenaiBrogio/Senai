using CinemaLog.Models;
using Microsoft.EntityFrameworkCore;

namespace CinemaLog.Data
{
    public class CinemaLogContext(DbContextOptions<CinemaLogContext> options) : DbContext(options)
    {
        public DbSet<Catalogo> Catalogos { get; set; } = default!;
    }
}
