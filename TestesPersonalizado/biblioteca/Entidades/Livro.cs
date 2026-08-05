namespace Biblioteca.Entidades;

public class Livro
{
    public Livro(string titulo, string autor, int anopulicacao, int idadeMinima)
    {
        Titulo = titulo;
        Autor = autor;
        Anopulicacao = anopulicacao;
        IdadeMinima = idadeMinima;
    }

    public string Titulo { get; set; }
    public string Autor { get;  set; }
    public int Anopulicacao { get; set; }
    public int IdadeMinima { get; set; }
}
