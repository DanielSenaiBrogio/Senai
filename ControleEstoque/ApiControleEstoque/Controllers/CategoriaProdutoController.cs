
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiControleEstoque.Data;
using ProdutoDoMain;

namespace ApiControleEstoque.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaProdutoController : ControllerBase
    {
        private readonly ApiControleEstoqueContext _context;

        public CategoriaProdutoController(ApiControleEstoqueContext context)
        {
            _context = context;
        }

        // GET: api/CategoriaProdutoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoriaProduto>>> GetCategoriaProduto()
        {
            return await _context.CategoriaProduto.ToListAsync();
        }

        // GET: api/CategoriaProdutoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CategoriaProduto>> GetCategoriaProduto(Guid id)
        {
            var categoriaProduto = await _context.CategoriaProduto.FindAsync(id);

            if (categoriaProduto == null)
            {
                return NotFound();
            }

            return categoriaProduto;
        }

        // PUT: api/CategoriaProdutoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategoriaProduto(Guid id, CategoriaProduto categoriaProduto)
        {
            if (id != categoriaProduto.id)
            {
                return BadRequest();
            }

            _context.Entry(categoriaProduto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoriaProdutoExists(id))
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

        // POST: api/CategoriaProdutoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CategoriaProduto>> PostCategoriaProduto(CategoriaProduto categoriaProduto)
        {
            _context.CategoriaProduto.Add(categoriaProduto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategoriaProduto", new { id = categoriaProduto.id }, categoriaProduto);
        }

        // DELETE: api/CategoriaProdutoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategoriaProduto(Guid id)
        {
            var categoriaProduto = await _context.CategoriaProduto.FindAsync(id);
            if (categoriaProduto == null)
            {
                return NotFound();
            }

            _context.CategoriaProduto.Remove(categoriaProduto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoriaProdutoExists(Guid id)
        {
            return _context.CategoriaProduto.Any(e => e.id == id);
        }
    }
}
