using System.ComponentModel.DataAnnotations;

namespace Serasa.Models
{
    public class SerasaModel
    {
        [Key] public int ID { get; set; }
        [Required]
        [StringLength(11)]
        public string CPF { get; set; } = ³£

        public int Score { get; set; }

        public DateTime DataConsulta { get; set; } = DateTime.Now;
    }
}
