using Microsoft.AspNetCore.Mvc;
using API_aluno.Models;
using API_aluno.Data;


namespace API_aluno.Controllers;


[ApiController]
[Route("api/[controller]")]
public class AlunoController : ControllerBase
{


    private readonly AppDbContext _context;


    public AlunoController(AppDbContext context)
    {
        _context = context;
    }




    // LISTAR TODOS
    [HttpGet]
    public IActionResult Get()
    {

        return Ok(_context.Alunos.ToList());

    }





    // BUSCAR POR ID
    [HttpGet("{id}")]
    public IActionResult GetById(Guid id)
    {

        var aluno = _context.Alunos.Find(id);



        if(aluno == null)
        {
            return NotFound();
        }



        return Ok(aluno);

    }






    // ADICIONAR
    [HttpPost]
    public IActionResult Post(Aluno aluno)
    {


        aluno.Id = Guid.NewGuid();


        _context.Alunos.Add(aluno);


        _context.SaveChanges();



        return Ok(aluno);

    }







    // DELETAR
    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {


        var aluno = _context.Alunos.Find(id);



        if(aluno == null)
        {
            return NotFound();
        }



        _context.Alunos.Remove(aluno);


        _context.SaveChanges();



        return Ok("Aluno removido com sucesso");


    }



}