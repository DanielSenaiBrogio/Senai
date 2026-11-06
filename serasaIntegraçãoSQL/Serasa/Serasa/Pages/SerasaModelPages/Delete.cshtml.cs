using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Serasa.Models;

namespace Serasa.Pages.SerasaModelPages;

public class DeleteModel : PageModel
{
    private readonly SerasaContext _context;

    public DeleteModel(SerasaContext context)
    {
        _context = context;
    }

    [BindProperty]
    public SerasaModel SerasaModel { get; set; } = default!;

    public async Task<IActionResult> OnGetAsync(int? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var serasamodel = await _context.SerasaModel.FirstOrDefaultAsync(m => m.ID == id);
        if (serasamodel is null)
        {
            return NotFound();
        }
        else
        {
            SerasaModel = serasamodel;
        }

        return Page();
    }

    public async Task<IActionResult> OnPostAsync(int? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var serasamodel = await _context.SerasaModel.FindAsync(id);
        if (serasamodel != null)
        {
            SerasaModel = serasamodel;
            _context.SerasaModel.Remove(SerasaModel);
            await _context.SaveChangesAsync();
        }

        return RedirectToPage("./Index");
    }
}
