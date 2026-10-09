using System.ComponentModel.DataAnnotations;

namespace APIBanco.Models;

public class Usuario
{
    // CONSTRUTOR VAZIO: Obrigatório para o Entity Framework funcionar
    public Usuario()
    {
    }

    // CONSTRUTOR COM PARÂMETROS: Para quando você quiser criar o usuário manualmente no código
    public Usuario(string nome, string cpf, string rg, string senha)
    {
        Nome = nome;
        CPF = cpf;
        RG = rg;
        Senha = senha;
        Id = Guid.NewGuid(); // Gera um ID único automaticamente ao criar o usuário
    }

    // GUID: Identificador único global (Substituí Guild por Guid)
    [Key]
    public Guid Id { get; set; }

    [Required(ErrorMessage = "O nome é obrigatório")]
    [StringLength(100)]
    public string Nome { get; set; } = string.Empty;

    [Required(ErrorMessage = "O CPF é obrigatório")]
    [StringLength(14)] // Ex: 000.000.000-00
    public string CPF { get; set; } = string.Empty;

    [Required(ErrorMessage = "O RG é obrigatório")]
    public string RG { get; set; } = string.Empty;

    [Required(ErrorMessage = "A senha é obrigatória")]
    public string Senha { get; set; } = string.Empty;
}
