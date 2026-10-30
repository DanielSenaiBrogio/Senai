
using ApiJWT.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiJWT.Data
{
    public class LoginDbContext : DbContext
    {
        public LoginDbContext(DbContextOptions<LoginDbContext> options)
            : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }
    }
}
