
using System.ComponentModel.DataAnnotations;

namespace ProdutoDoMain;

internal class Produtos
{
    public Produtos(bool habilitado, CategoriaProduto categoria, UnidadeMedida unidadeMedida, string nome, string nomeArquivoFoto, string? descricao, decimal quantidadeAtual)
    {
        Habilitado = habilitado;
        Categoria = categoria;
        UnidadeMedida = unidadeMedida;
        this.Nome = nome;
        this.NomeArquivoFoto = nomeArquivoFoto;
        this.Descricao = descricao;
        this.QuantidadeAtual = quantidadeAtual;
    }

    [Key]
    public Guid Id { get; set; }
    public Boolean Habilitado { get; set; }
    public CategoriaProduto Categoria { get; set; }
    public  UnidadeMedida UnidadeMedida { get; set; }
    public string Nome { get; set; }
    public string NomeArquivoFoto { get; set; }
    public string? Descricao { get; set; }
    public decimal QuantidadeAtual { get; set;}
    
}

