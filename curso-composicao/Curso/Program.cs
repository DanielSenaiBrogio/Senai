using CursoDomain;

namespace Curso
{
    internal class Program
    {
        static void Main(string[] args)
        {
            


            AlunoModel aluno = new AlunoModel("Pedro", 21);
            CursoModel curso = new("DS", 21);
            curso.MatricularAluno(aluno);

            aluno.CriarNota("Atividade 1", 100);


            Console.WriteLine($"{aluno.NomeAluno} com {aluno.Idade} anos");
        }
    }
}
