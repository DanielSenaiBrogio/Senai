using System.ComponentModel.DataAnnotations;

namespace ProdutoDoMain;

public class UnidadeMedida
{
    // construtor que recebe os dados basicos da unidade de medida
    // sigla é a abreviação como KG ou LT
    // descricao é o nome completo como Quilograma ou Litro
    // fracionado indica se pode ser dividido em partes decimais
    public UnidadeMedida(string sigla, string? descricao, bool fracionado)

    {
        Sigla = sigla;
        Descricao = descricao;
        Fracionado = fracionado;
    }

    [Key] // identificador unico no banco de dados
    public Guid id { get; set; }

    [StringLength(5)] // limite de 5 caracteres para a sigla
    public required string Sigla { get; set; } // obrigatorio abreviação da unidade

    public string? Descricao { get; set; } // nome completo pode ser nulo

    public bool Fracionado { get; set; } = false; // por padrão não é fracionado

}
