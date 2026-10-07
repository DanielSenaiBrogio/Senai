using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APIBanco.Models;
using BCrypt.Net; // Necessário para o Hash de senha

namespace APIBanco.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly APIBancoContext _context;

        public UsuarioController(APIBancoContext context)
        {
            _context = context;
        }

        // GET: api/Usuario
        // Retorna a lista de usuários (A senha não aparecerá por causa do [JsonIgnore] no Model)
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuario()
        {
            return await _context.Usuario.ToListAsync();
        }

        // GET: api/Usuario/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Usuario>> GetUsuario(System.Guid id)
        {
            var usuario = await _context.Usuario.FindAsync(id);

            if (usuario == null)
            {
                return NotFound("Usuário não encontrado.");
            }

            return usuario;
        }

        // PUT: api/Usuario/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuario(System.Guid id, Usuario usuario)
        {
            if (id != usuario.Id)
            {
                return BadRequest("ID do usuário não coincide.");
            }

            // Se a senha estiver sendo alterada, precisamos fazer o Hash dela novamente
            if (!string.IsNullOrEmpty(usuario.Senha))
            {
                usuario.Senha = BCrypt.Net.BCrypt.HashPassword(usuario.Senha);
            }

            _context.Entry(usuario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsuarioExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Usuario (Criação da conta)
        [HttpPost]
        public async Task<ActionResult<Usuario>> PostUsuario(Usuario usuario)
        {
            if (usuario == null || string.IsNullOrEmpty(usuario.Senha))
            {
                return BadRequest("Dados incompletos.");
            }

            // --- O SEGREDO ESTÁ AQUI ---
            // Transforma a senha digitada em Hash antes de salvar no banco
            usuario.Senha = BCrypt.Net.BCrypt.HashPassword(usuario.Senha);

            _context.Usuario.Add(usuario);
            await _context.SaveChangesAsync();

            // Retorna o usuário criado (a senha não voltará no JSON por causa do [JsonIgnore])
            return CreatedAtAction("GetUsuario", new { id = usuario.Id }, usuario);
        }

        // NOVO MÉTODO: Login (Para verificar se a senha está correta)
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            // 1. Busca o usuário pelo CPF
            var usuario = await _context.Usuario.FirstOrDefaultAsync(u => u.CPF == request.CPF);

            if (usuario == null)
            {
                return Unauthorized("CPF ou Senha incorretos.");
            }

            // 2. Verifica se a senha digitada bate com o Hash guardado no banco
            bool senhaValida =  .Net.BCrypt.Verify(request.Senha, usuario.Senha);

            if (!senhaValida)
            {
                return Unauthorized("CPF ou Senha incorretos.");
            }

            return Ok(new { mensagem = "Login realizado com sucesso!", usuarioId = usuario.Id });
        }

        // DELETE: api/Usuario/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuario(System.Guid id)
        {
            var usuario = await _context.Usuario.FindAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }

            _context.Usuario.Remove(usuario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsuarioExists(System.Guid id)
        {
            return _context.Usuario.Any(e => e.Id == id);
        }
    }

    // Classe auxiliar para receber os dados de login do front-end
    public class LoginRequest
    {
        public string CPF { get; set; } = string.Empty;
        public string Senha { get; set; } = string.Empty;
    }
}
