using System.ComponentModel.DataAnnotations;

namespace APi_hashe.Models
{
    public class Usuario
    {
        [Key]
        public int Id { get; set; }
        public string CPF { get; set; }

        public string Senha { get; set; }

    }
}
