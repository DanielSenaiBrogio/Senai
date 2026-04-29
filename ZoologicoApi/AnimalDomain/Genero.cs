using System.ComponentModel.DataAnnotations;

namespace AnimalDomain;

public class Genero
{
    public Genero(string nome, string? descricao)
    {
        Nome = nome;
        Descricao = descricao;
    }

    [Key] public Guid Id { get; set; }
    [StringLength(50)] public string Nome { get; set; }
    public string? Descricao { get; set; }
}
