using System.ComponentModel.DataAnnotations;

namespace AnimalDomain;

public class Especie
{
    public Especie(
        Guid generoId, string nome, string? descricao, 
        int quantidade, string? arquivoImagem)
    {
        GeneroId = generoId;
        Nome = nome;
        Descricao = descricao;
        Quantidade = quantidade;
        ArquivoImagem = arquivoImagem;
    }

    [Key] public Guid Id { get; set; }    
    public Guid GeneroId { get; set; }
    public Genero? Genero { get; set; }
    [StringLength(50)] public string Nome { get; set; }
    public string? Descricao { get; set; }
    public int Quantidade { get; set; }
    public string? ArquivoImagem { get; set; }
}
