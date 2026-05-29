using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiControleEstoque.Data;
using OperacaoDomain;

namespace ApiControleEstoque.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperacaoEstoqueController : ControllerBase
    {
        private readonly ApiControleEstoqueContext _context;

        public OperacaoEstoqueController(ApiControleEstoqueContext context)
        {
            _context = context;
        }

        // GET: api/OperacaoEstoque
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OperacaoEstoque>>> GetOperacaoEstoque()
        {
            return await _context.OperacaoEstoque.ToListAsync();
        }

        // GET: api/OperacaoEstoque/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OperacaoEstoque>> GetOperacaoEstoque(Guid id)
        {
            var operacaoEstoque = await _context.OperacaoEstoque.FindAsync(id);

            if (operacaoEstoque == null)
            {
                return NotFound();
            }

            return operacaoEstoque;
        }

        // PUT: api/OperacaoEstoque/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOperacaoEstoque(Guid id, OperacaoEstoque operacaoEstoque)
        {
            if (id != operacaoEstoque.Id)
            {
                return BadRequest();
            }

            _context.Entry(operacaoEstoque).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OperacaoEstoqueExists(id))
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

        // POST: api/OperacaoEstoque
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<OperacaoEstoque>> PostOperacaoEstoque(OperacaoEstoque operacaoEstoque)
        {
            _context.OperacaoEstoque.Add(operacaoEstoque);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOperacaoEstoque", new { id = operacaoEstoque.Id }, operacaoEstoque);
        }

        // DELETE: api/OperacaoEstoque/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOperacaoEstoque(Guid id)
        {
            var operacaoEstoque = await _context.OperacaoEstoque.FindAsync(id);
            if (operacaoEstoque == null)
            {
                return NotFound();
            }

            _context.OperacaoEstoque.Remove(operacaoEstoque);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OperacaoEstoqueExists(Guid id)
        {
            return _context.OperacaoEstoque.Any(e => e.Id == id);
        }
    }
}
