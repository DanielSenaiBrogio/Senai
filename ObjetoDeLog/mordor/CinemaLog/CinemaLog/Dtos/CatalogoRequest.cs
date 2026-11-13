using System.ComponentModel.DataAnnotations;

namespace CinemaLog.Dtos
{
    public class CatalogoRequest
    {
        [Required(ErrorMessage = "O nome do filme é obrigatório.")]
        [StringLength(50, ErrorMessage = "O nome deve ter no máximo 50 caracteres.")]
        public string Nome { get; set; } = string.Empty;

        [Required(ErrorMessage = "A descrição do filme é obrigatória.")]
        public string Descricao { get; set; } = string.Empty;
    }
}
