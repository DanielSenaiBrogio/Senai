public class GetOperacaoResponse
{
    public Guid Id { get; set; }

    public DateTime Hora { get; set; }

    public required string Motivo { get; set; }

    public required string EntradaSaida { get; set; }
    
    public List<OperacaoEstoqueDetalhesDTO> Detalhes { get; set; } = [];
}


public class OperacaoEstoqueDetalhesDTO
{
    public Guid Id { get; set; }

    public decimal Quantidade { get; set; }

    public required string NomeProduto { get; set; }

    public required string Sigla { get; set; }
}