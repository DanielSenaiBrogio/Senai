namespace API_aluno.Models;

public class Aluno
{
    public Guid Id { get; set; }
    public required string Nome { get; set; }
    public required string Sexo { get; set; }
    public required int Idade { get; set; }
    public required string Email { get; set; }
    public required string NumeroTelefone { get; set; } 
    public required string CPF { get; set; }
    public required string Endereco { get; set;}
    public string? Curso { get; set;}
}  