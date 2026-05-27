namespace ApiControleEstoque.Contracts
{
    public class GetPesquisaProdutoRequest
    {
        public required Guid id { get; set; }
        public required string? CategoriaNome { get; set; }
        public required string? ProdutoNome { get; set; }
        public required decimal? QuantidadeAtual { get; set; }
        public required string? UnidadeMedidaNome { get; set; }
        public string? UrlImagem { get; set; }
    }
}
