using ProdutoDomain;
namespace Teste

{
    [TestClass]
    public sealed class Test1
    {
        [TestMethod]
        public void ImpedirQuantidadeMenorQueZero()
        {
            var produto = new Produto(
                true,
                Guid.NewGuid(),
                Guid.NewGuid(),
                "Alicate",
                "bla bla bla",
                -4
            );
            
        }

        [TestMethod]
        public void ImpedirPrecoMenorQueZero()
        {
            var produto = new Produto(
                true,
                Guid.NewGuid(),
                Guid.NewGuid(),
                "Alicate",
                "bla bla bla",
                10,
                -4
            );
            
        }

        [TestMethod]
        public void UnidadeMedidaSomenteUmProduto()
        {
            Assert.ThrowsException<PlatformNotSupportedException>(() => {
                var produto = new Produto(
                    true,
                    Guid.NewGuid(),
                    Guid.Empty,
                    "Alicate",
                    "bla bla bla",
                    1
                );
            });

            
        }

        [TestMethod]
    public void CadaProdutoUmaCategoria()
    {
    Assert.ThrowsException<ArgumentException>(() =>
    {
        var produto = new Produto(
            true,
            Guid.Empty,
            Guid.NewGuid(),
            "Alicate",
            "bla bla bla",
            1
        );

    });
    }
    }
}
