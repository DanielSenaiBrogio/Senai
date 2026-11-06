using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Serasa.Models;

namespace Serasa.Pages.SerasaModelPages;

public class EditModel : PageModel
{
    private readonly SerasaContext _context;

    public EditModel(SerasaContext context)
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
        SerasaModel = serasamodel;
        return Page();
    }

    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see https://aka.ms/RazorPagesCRUD.
    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        _context.Attach(SerasaModel).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!SerasaModelExists(SerasaModel.ID))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return RedirectToPage("./Index");
    }

    private bool SerasaModelExists(int id)
    {
        return _context.SerasaModel.Any(e => e.ID == id);
    }
}
