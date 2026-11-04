
using Microsoft.Data.SqlClient;

Console.WriteLine("CIRCO APP");

SqlConnection conexao = new();
conexao.ConnectionString =
    "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=CIRCO;Integrated Security=True;";

string opcao = "";

Console.WriteLine("1 - Criar Colaborador");
Console.WriteLine("2 - Criar Data Show");
Console.WriteLine("3 - Criar Atração");
Console.WriteLine("4 - Excluir Colaborador");
Console.WriteLine("5 - Excluir Atração");
Console.WriteLine("6 - Listar Colaboradores");
Console.WriteLine("7 - Listar Atrações");
Console.WriteLine("8 - Listar Data Show");
Console.WriteLine("9 - Sair");

Console.Write("Selecione a opção desejada: ");
opcao = Console.ReadLine() ?? "";

switch (opcao)
{
    case "1":
        CriarColaborador();
        break;

    case "2":
        CriarDataDoEvento();
        break;

    case "3":
        CriarAtracao();
        break;

    case "4":
        ExcluirColaborador();
        break;

    case "5":
        ExcluirAtracao();
        break;

    case "6":
        ListarColaborador();
        break;

    case "7":
        ListarAtracoes();
        break;

    case "8":
        ListarDataShow();
        break;

    case "9":
        Console.WriteLine("Saindo...");
        break;

    default:
        Console.WriteLine("Opção inválida");
        break;
}

void CriarColaborador()
{
    Console.Write("Informe o nome: ");
    string nome = Console.ReadLine() ?? "";

    Console.Write("Informe a idade: ");
    int idade = int.Parse(Console.ReadLine() ?? "0");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = @"INSERT INTO COLABORADORES
                            (NOME, IDADE)
                            VALUES (@NOME, @IDADE)";

    comando.Parameters.AddWithValue("@NOME", nome);
    comando.Parameters.AddWithValue("@IDADE", idade);

    comando.ExecuteNonQuery();

    conexao.Close();

    Console.WriteLine("Colaborador cadastrado com sucesso!");
}

void CriarAtracao()
{
    Console.Write("Informe o nome: ");
    string nome = Console.ReadLine() ?? "";

    Console.Write("Informe a descricao: ");
    string descricao = Console.ReadLine() ?? "";

    Console.Write("Informe o ID do colaborador: ");
    int colaboradorId = int.Parse(Console.ReadLine() ?? "0");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;

    comando.CommandText = @"INSERT INTO ATRACOES
                            (NOME, DESCRICAO_LONGA, COLABORADOR_ID)
                            VALUES (@NOME, @DESCRICAO, @COLABORADOR_ID)";

    comando.Parameters.AddWithValue("@NOME", nome);
    comando.Parameters.AddWithValue("@DESCRICAO", descricao);
    comando.Parameters.AddWithValue("@COLABORADOR_ID", colaboradorId);

    comando.ExecuteNonQuery();

    conexao.Close();

    Console.WriteLine("Atração cadastrada com sucesso!");
}

void ExcluirColaborador()
{
    Console.Write("Informe o ID do colaborador: ");
    int id = int.Parse(Console.ReadLine() ?? "0");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "DELETE FROM COLABORADORES WHERE ID = @ID";

    comando.Parameters.AddWithValue("@ID", id);

    int linhasAfetadas = comando.ExecuteNonQuery();

    conexao.Close();

    if (linhasAfetadas > 0)
        Console.WriteLine("Colaborador excluído com sucesso!");
    else
        Console.WriteLine("Colaborador não encontrado.");
}

void ExcluirAtracao()
{
    Console.Write("Informe o ID da atração: ");
    int id = int.Parse(Console.ReadLine() ?? "0");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "DELETE FROM ATRACOES WHERE ID = @ID";

    comando.Parameters.AddWithValue("@ID", id);

    int linhasAfetadas = comando.ExecuteNonQuery();

    conexao.Close();

    if (linhasAfetadas > 0)
        Console.WriteLine("Atração excluída com sucesso!");
    else
        Console.WriteLine("Atração não encontrada.");
}

void ListarColaborador()
{
    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "SELECT * FROM COLABORADORES";

    SqlDataReader leitor = comando.ExecuteReader();

    Console.WriteLine("\n--- LISTA DE COLABORADORES ---");

    while (leitor.Read())
    {
        Console.WriteLine("-------------------------");
        Console.WriteLine($"ID: {leitor["ID"]}");
        Console.WriteLine($"Nome: {leitor["NOME"]}");
        Console.WriteLine($"Idade: {leitor["IDADE"]}");
    }

    leitor.Close();
    conexao.Close();
}

void ListarAtracoes()
{
    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "SELECT * FROM ATRACOES";

    SqlDataReader leitor = comando.ExecuteReader();

    Console.WriteLine("\n--- LISTA DE ATRAÇÕES ---");

    while (leitor.Read())
    {
        Console.WriteLine("-------------------------");
        Console.WriteLine($"ID: {leitor["ID"]}");
        Console.WriteLine($"Nome: {leitor["NOME"]}");
        Console.WriteLine($"Descrição: {leitor["DESCRICAO_LONGA"]}");
    }

    leitor.Close();
    conexao.Close();
}


void CriarDataDoEvento()
{
    Console.Write("Qual é a data que será o evento: ");
    DateTime dataEvento = DateTime.Parse(Console.ReadLine() ?? "");

    Console.Write("Informe o ID do colaborador: ");
    int colaboradorId = int.Parse(Console.ReadLine() ?? "0");

    Console.Write("Informe a descrição do show: ");
    string descricaoDoShow = Console.ReadLine() ?? "";

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;

    comando.CommandText = @"INSERT INTO DATAS
                            (DATA_EVENTO, DESCRICAO_LONGA, COLABORADOR_ID)
                            VALUES (@DATA, @DESCRICAO, @COLABORADOR_ID)";

    comando.Parameters.AddWithValue("@DATA", dataEvento);
    comando.Parameters.AddWithValue("@DESCRICAO", descricaoDoShow);
    comando.Parameters.AddWithValue("@COLABORADOR_ID", colaboradorId);

    comando.ExecuteNonQuery();

    conexao.Close();

    Console.WriteLine("Show agendado com sucesso!");
}


void ListarDataShow()
{
    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "SELECT * FROM DATAS";

    SqlDataReader leitor = comando.ExecuteReader();

    Console.WriteLine("\n--- LISTA DE SHOWS ---");

    while (leitor.Read())
    {
        Console.WriteLine("-------------------------");
        Console.WriteLine($"ID: {leitor["ID"]}");
        Console.WriteLine($"Data do evento: {Convert.ToDateTime(leitor["DATA_EVENTO"]).ToString("dd/MM/yyyy")}");
        Console.WriteLine($"Descrição: {leitor["DESCRICAO_LONGA"]}");
        Console.WriteLine($"ID do colaborador: {leitor["COLABORADOR_ID"]}");
    }

    leitor.Close();
    conexao.Close();
}