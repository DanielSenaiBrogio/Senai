

using System.ComponentModel.DataAnnotations;

namespace ProdutoDoMain;

public class CategoriaProduto
{
    public CategoriaProduto(string nome, string descricao)
    {
        Nome = nome;
        Descricao = descricao;
    }

    [Key]
    public Guid id { get; set;}
    [StringLength(50)]
    public required string Nome { get; set; }
    public string Descricao { get; set; }

}
