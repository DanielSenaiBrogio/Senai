using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CozinhaApi.Models;

namespace CozinhaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UtensilioController : ControllerBase
    {
        private readonly CozinhaContext _context;

        public UtensilioController(CozinhaContext context)
        {
            _context = context;
        }

        // GET: api/Utensilio
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UtensilioModel>>> GetUtensilioModel()
        {
            return await _context.UtensilioModel.ToListAsync();
        }

        // GET: api/Utensilio/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UtensilioModel>> GetUtensilioModel(Guid id)
        {
            var utensilioModel = await _context.UtensilioModel.FindAsync(id);

            if (utensilioModel == null)
            {
                return NotFound();
            }

            return utensilioModel;
        }

        // PUT: api/Utensilio/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUtensilioModel(Guid id, UtensilioModel utensilioModel)
        {
            if (id != utensilioModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(utensilioModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UtensilioModelExists(id))
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

        // POST: api/Utensilio
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UtensilioModel>> PostUtensilioModel(UtensilioModel utensilioModel)
        {
            _context.UtensilioModel.Add(utensilioModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUtensilioModel", new { id = utensilioModel.Id }, utensilioModel);
        }

        // DELETE: api/Utensilio/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUtensilioModel(Guid id)
        {
            var utensilioModel = await _context.UtensilioModel.FindAsync(id);
            if (utensilioModel == null)
            {
                return NotFound();
            }

            _context.UtensilioModel.Remove(utensilioModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UtensilioModelExists(Guid id)
        {
            return _context.UtensilioModel.Any(e => e.Id == id);
        }
    }
}
