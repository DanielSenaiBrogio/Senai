using System.ComponentModel.DataAnnotations;
using ProdutoDomain;

namespace OperacaoDomain;

public class OperacaoEstoque
{
    public OperacaoEstoque(DateTime hora, string motivo, string entradaSaida)
    {
        if (entradaSaida.ToUpper() != "E" && entradaSaida.ToUpper() != "S")
        {
            throw new ArgumentException("EntradaSaida deve ser 'E' ou 'S'");
        }

        Hora = hora;
        Motivo = motivo;
        EntradaSaida = entradaSaida;
    }
    public Guid Id { get; set; }

    public DateTime Hora { get; set; }

    public string Motivo { get; set; }

    [StringLength(1)]

    public string EntradaSaida { get; set; }

    public IReadOnlyList<OperacaoEstoqueDetalhe> Detalhes => detalhes;

    private List<OperacaoEstoqueDetalhe> detalhes = new();

    public void CriarDetalhe(Produto produto, decimal quantidade)
    {
       if (EntradaSaida.ToUpper() == "S" && quantidade > produto.Quantidade)
       {
           throw new InvalidOperationException("Quantidade insuficiente em estoque");
       }
        if (!produto.Habilitado)
        {
            throw new InvalidOperationException("Produto não habilitado");
        }
        OperacaoEstoqueDetalhe detalhe = new (produto.Id, quantidade);
        detalhes.Add(detalhe);
    }
}
