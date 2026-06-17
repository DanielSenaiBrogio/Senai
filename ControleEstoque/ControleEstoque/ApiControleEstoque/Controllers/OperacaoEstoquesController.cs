using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiControleEstoque.Data;
using OperacaoDomain;
using ApiControleEstoque.Contracts;

namespace ApiControleEstoque.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperacaoEstoquesController : ControllerBase
    {
        private readonly ApiControleEstoqueContext _context;

        public OperacaoEstoquesController(ApiControleEstoqueContext context)
        {
            _context = context;
        }

        // GET: api/OperacaoEstoques
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OperacaoEstoque>>> GetOperacaoEstoque()
        {
            return await _context.OperacaoEstoque.ToListAsync();
        }

        // GET: api/OperacaoEstoques/5
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

        // PUT: api/OperacaoEstoques/5
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

        // POST: api/OperacaoEstoques
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
     [HttpPost]
        public async Task<ActionResult<OperacaoEstoque>> PostOperacaoEstoque(PostOperacaoRequest request)
        {
            if (request == null)
            {
                return BadRequest("A requisição não pode ser vazia");
            }

            OperacaoEstoque operacaoEstoque = new OperacaoEstoque(DateTime.Now, request.Motivo, request.EntradaSaida);

            List<Guid> produtosNaoEncontrados = [];

            foreach (var detalhe in request.Detalhes)
            {
                if (detalhe.ProdutoId != Guid.Empty)
                {
                    var produto = await _context.Produtos.FindAsync(detalhe.ProdutoId);

                    if (produto == null)
                    {
                        produtosNaoEncontrados.Add(detalhe.ProdutoId);
                    }
                    else
                    {
                        try
                        {
                            operacaoEstoque.CriarDetalhe(produto, detalhe.Quantidade);
                        }
                        catch (ArgumentException erro)
                        {
                            return BadRequest(erro.Message);
                        }
                    }

                }
                else
                {
                    return BadRequest("O id do produto deve ser informado");
                }
            }

            if (produtosNaoEncontrados.Any())
            {
                return BadRequest("Erro ao encontrar ids dos produtos: \n" + string.Join("\n", produtosNaoEncontrados));
            }

            _context.OperacaoEstoque.Add(operacaoEstoque);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOperacaoEstoque", new { id = operacaoEstoque.Id }, operacaoEstoque);
        }
        // DELETE: api/OperacaoEstoques/5
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
