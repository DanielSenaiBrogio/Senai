using System;
using System.Collections.Generic;

namespace CursoDomain
{
    public class CursoModel
    {
        public string NomeCurso { get; }
        public int IdadeMinima { get; }

        private List<AlunoModel> _alunos = new List<AlunoModel>();

        public IReadOnlyList<AlunoModel> Alunos => _alunos;

        public CursoModel(string nomeCurso, int idadeMinima)
        {
            NomeCurso = nomeCurso;
            IdadeMinima = idadeMinima;
        }

        public void MatricularAluno(AlunoModel aluno)
        {
            if (aluno.Idade < IdadeMinima)
            {
                throw new ArgumentException("Aluno não tem idade mínima para o curso");
            }

            _alunos.Add(aluno);
        }
    }
}