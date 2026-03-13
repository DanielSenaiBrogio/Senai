using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CozinhaApi.Models;

    public class CozinhaContext : DbContext
    {
        public CozinhaContext (DbContextOptions<CozinhaContext> options)
            : base(options)
        {
        }

        public DbSet<CozinhaApi.Models.UtensilioModel> UtensilioModel { get; set; } = default!;
    }
