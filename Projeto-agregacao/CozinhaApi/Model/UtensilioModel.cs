using System.ComponentModel.DataAnnotations;

namespace CozinhaApi.Models;

public class UtensilioModel
{
    [Key]
    public Guid Id { get; set; }

    [StringLength(50)]
    public required string Nome { get; set; }
}