namespace ApiZoologico.Dtos.Especie;

public record PatchEspecieRequest
{
    public Guid? GeneroId { get; set; }
    public string? Nome { get; set; }
    public string? Descricao { get; set; }
    public int? Quantidade { get; set; }
}
