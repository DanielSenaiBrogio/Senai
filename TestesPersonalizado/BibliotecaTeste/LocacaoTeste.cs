using Biblioteca.Entidades;
using Biblioteca.Excecoes;

namespace BibliotecaTeste;

[TestClass]
public sealed class LocacaoTeste
{
    [TestMethod]
    public void TesteDeIdadeMinima()
    {
        Action acao = () =>
        {
            Clientes cliente = new("Jounin", 15, false);
            Livro livro = new("O homem que calculava", "Malbathan", 1988, 16);

            DateTime retirada = new DateTime(2026, 07, 30);
            DateTime devolucao = new DateTime(2026, 07, 31);

            Locacao locacao = new Locacao(livro, cliente, retirada, devolucao);
        };
        Assert.Throws<IdadeNaoPermitidaExeption>(acao);

    }


    //ClientesComPendenciaTeste


    [TestClass]
    public sealed class ClientesComPendenciaTeste
    {
        [TestMethod]
        public void ClienteComPendencia()
        {
            Action acao = () =>
            {
                Clientes cliente = new("Jounin", 15, false);
                Livro livro = new("O homem que calculava", "Malbathan", 1988, 16);

                DateTime retirada = new DateTime(2026, 07, 30);
                DateTime devolucao = new DateTime(2026, 07, 31);

                Locacao locacao = new Locacao(livro, cliente, retirada, devolucao);
            };
            Assert.Throws<IdadeNaoPermitidaExeption>(acao);
        }
    }




    //MomentosIncoerentesTeste


    [TestClass]
    public sealed class MomentosIncoerentesTeste
    {
        [TestMethod]
        public void DataDevolucaoAnteriorARetirada()
        {
            Action acao = () =>
            {
                Clientes cliente = new("Jounin", 20, false);
                Livro livro = new("O homem que calculava", "Malbathan", 1988, 16);

               
                DateTime retirada = new DateTime(2026, 07, 31);
                DateTime devolucao = new DateTime(2026, 07, 30);

                Locacao locacao = new Locacao(livro, cliente, retirada, devolucao);
            };
            Assert.Throws<MomentosIncoerentesException>(acao);

        }
    }


}
