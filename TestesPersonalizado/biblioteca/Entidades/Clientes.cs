namespace Biblioteca.Entidades
{
    public class Clientes
    {
        public Clientes(string nome, int idade, bool temPendencia)
        {
            this.nome = nome;
            this.idade = idade;
            TemPendencia = temPendencia;
        }

        public string nome { get; set; }
        public int idade { get; set; }
        public bool TemPendencia { get; set; }

    }
}
