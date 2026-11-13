using CinemaLog.Data;
using CinemaLog.Dtos;
using CinemaLog.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Serilog;

namespace CinemaLog.Controllers;

[Route("api/[controller]")]
[ApiController]
public class FilmeController : ControllerBase
{
    private readonly CinemaLogContext _context;

    public FilmeController(CinemaLogContext context)
    {
        _context = context;
    }

    // GET: api/Filme
    [HttpGet]
    public async Task<ActionResult<IEnumerable<CatalogoResponse>>> GetFilmes()
    {
        Log.Information("GET api/Filme - consultando o catálogo de filmes");

        var filmes = await _context.Catalogos
            .OrderBy(f => f.Nome)
            .ToListAsync();

        Log.Information("GET api/Filme - {Quantidade} filmes encontrados", filmes.Count);

        return filmes.Select(MapToResponse).ToList();
    }

    // GET: api/Filme/5
    [HttpGet("{id}")]
    public async Task<ActionResult<CatalogoResponse>> GetFilme(Guid id)
    {
        var filme = await _context.Catalogos.FindAsync(id);

        if (filme is null)
        {
            Log.Warning("GET api/Filme/{Id} - filme não encontrado", id);
            return NotFound();
        }

        return MapToResponse(filme);
    }

    // PUT: api/Filme/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutFilme(Guid id, CatalogoRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var filme = await _context.Catalogos.FindAsync(id);

        if (filme is null)
        {
            return NotFound();
        }

        filme.Nome = request.Nome;
        filme.Descricao = request.Descricao;

        await _context.SaveChangesAsync();

        Log.Information("PUT api/Filme/{Id} - filme '{Nome}' atualizado", id, filme.Nome);

        return NoContent();
    }

    // POST: api/Filme
    [HttpPost]
    public async Task<ActionResult<CatalogoResponse>> PostFilme(CatalogoRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var filme = new Catalogo
        {
            Nome = request.Nome,
            Descricao = request.Descricao
        };

        _context.Catalogos.Add(filme);
        await _context.SaveChangesAsync();

        Log.Information("POST api/Filme - filme '{Nome}' cadastrado com o id {Id}", filme.Nome, filme.Id);

        return CreatedAtAction(nameof(GetFilme), new { id = filme.Id }, MapToResponse(filme));
    }

    // DELETE: api/Filme/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteFilme(Guid id)
    {
        var filme = await _context.Catalogos.FindAsync(id);

        if (filme is null)
        {
            return NotFound();
        }

        _context.Catalogos.Remove(filme);
        await _context.SaveChangesAsync();

        Log.Information("DELETE api/Filme/{Id} - filme '{Nome}' removido", id, filme.Nome);

        return NoContent();
    }

    // TEMP: dispara um erro de propósito para testar o log do Serilog
    [HttpGet("erro-teste")]
    public IActionResult GerarErro()
    {
        try
        {
            throw new Exception("Erro de teste");
        }
        catch (Exception ex)
        {
            Log.Error("Falha no endpoint /erro-teste: {Mensagem}", ex.Message);
            return StatusCode(500);
        }
    }

    private static CatalogoResponse MapToResponse(Catalogo filme) =>
        new(filme.Id, filme.Nome, filme.Descricao);
}
