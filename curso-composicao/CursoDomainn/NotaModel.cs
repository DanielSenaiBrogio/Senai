using System;

namespace CursoDomain
{
    public class NotaModel
    {
        public string NomeAtividade { get; }
        public int ValorNota { get; }

        internal NotaModel(string nomeAtividade, int valorNota)
        {
            if (valorNota < 0 || valorNota > 100)
            {
                throw new ArgumentException("A nota deve ser entre 0 e 100");
            }

            NomeAtividade = nomeAtividade;
            ValorNota = valorNota;
        }
    }
}