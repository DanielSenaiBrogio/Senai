using Microsoft.EntityFrameworkCore;
using ProdutoDoMain;

namespace ApiControleEstoque.Data;

public class ApiControleEstoqueContext : DbContext
{
    public ApiControleEstoqueContext (DbContextOptions<ApiControleEstoqueContext> options)
        : base(options)
    {
    }

    public DbSet<ProdutoDoMain.UnidadeMedida> UnidadesMedida { get; set; } = default!;

public DbSet<ProdutoDoMain.CategoriaProduto> CategoriaProduto { get; set; } = default!;

}
