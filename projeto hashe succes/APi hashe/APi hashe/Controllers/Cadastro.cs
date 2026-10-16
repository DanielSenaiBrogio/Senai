using Microsoft.AspNetCore.Mvc;
using APi_hashe.Models;
using System.Collections.Generic;
using System.Linq;

namespace APi_hashe.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CadastroController : ControllerBase
    {
        private static List<Usuario> usuarios = new List<Usuario>();

        [HttpPost]
        public IActionResult Cadastrar([FromBody] Usuario usuario)
        {
            if (usuario == null)
            {
                return BadRequest("Dados do usuário não informados.");
            }

            // .Trim() remove espaços em branco acidentais
            string cpfLimpo = usuario.CPF?.Trim();

            // Verificamos se existe alguém na lista com o mesmo CPF limpo
            bool cpfExiste = usuarios.Any(u => u.CPF?.Trim() == cpfLimpo);

            if (cpfExiste)
            {
                return BadRequest(new { mensagem = "Erro: Esse CPF já está cadastrado no sistema!" });
            }

            // Se passou pela verificação, gera o ID e salva
            usuario.Id = usuarios.Count + 1;
            usuarios.Add(usuario);

            return Ok(new { mensagem = "Usuário cadastrado com sucesso!", usuario });
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] Usuario loginData)
        {
            if (loginData == null)
            {
                return BadRequest("Dados de login não informados.");
            }

            // AQUI ESTÁ O SEGREDO:
            // No login, a gente QUER que o CPF exista. 
            // Então usamos o FirstOrDefault para tentar achar o usuário.
            var usuario = usuarios.FirstOrDefault(u => u.CPF?.Trim() == loginData.CPF?.Trim());

            if (usuario == null)
            {
                // Se NÃO encontrou o CPF, aí sim damos erro
                return NotFound(new { mensagem = "Erro: Esse usuário não existe!" });
            }

            // Se encontrou o CPF, agora checamos se a senha bate
            if (usuario.Senha != loginData.Senha)
            {
                return BadRequest(new { mensagem = "Erro: Senha incorreta!" });
            }

            // Se passou pelas duas verificações, login autorizado!
            return Ok(new { mensagem = "Login realizado com sucesso! Você está logado.", usuario = usuario });
        }


        [HttpGet]
        public IActionResult ListarUsuarios()
        {
            return Ok(usuarios);
        }
    }
}