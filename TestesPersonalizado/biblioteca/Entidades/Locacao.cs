using Biblioteca.Excecoes;

namespace Biblioteca.Entidades
{
    public class Locacao
    {
        public Locacao(Livro livro, Clientes cliente, DateTime momentoRetirada, DateTime momentoDevolucao )
        {

            if (cliente.idade < livro.IdadeMinima)
            {
                throw new IdadeNaoPermitidaExeption("Nao pode voce e menor de idade");

            } else if(MomentoRetirada > MomentoDevolucao ){
                 throw new MomentosIncoerentesException("O momento da retirada não pode ser após o momento da devolução");
            }
            else if (cliente.TemPendencia)
            {
                throw new ClienteComPendencias("Voce tem pendencias, por isso nao pode locar livros");
            }
            else {
                throw new Exception("Voce nao pegou livro aqui");
            }

            //Se o momento da retirada for após o momento da devolução
            //lançar uma exeçao personalizada chamada MomentosIncoerentesExeption


            Livro = livro;
            Cliente = cliente;
            MomentoRetirada = momentoRetirada;
            MomentoDevolucao = momentoDevolucao;
            
        }

        public Livro Livro { get; set; }
        public Clientes Cliente { get; set; }

        

        public DateTime MomentoRetirada  { get; set; }
        public DateTime MomentoDevolucao { get; set; }

        
    }
}
