using System.Collections.Generic;

namespace CursoDomain
{
    public class AlunoModel
    {
        public string NomeAluno { get; }
        public int Idade { get; }

        private List<NotaModel> _notas = new List<NotaModel>();

        public IReadOnlyList<NotaModel> Notas => _notas;

        public AlunoModel(string nomeAluno, int idade)
        {
            NomeAluno = nomeAluno;
            Idade = idade;
        }

        public void CriarNota(string nomeAtividade, int valorNota)
        {
            NotaModel nota = new NotaModel(nomeAtividade, valorNota);

            _notas.Add(nota);

            Console.WriteLine("Aluno: " + NomeAluno + " Nota: " + valorNota);
        }
    }
}