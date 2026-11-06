using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Serasa.Models;

namespace Serasa.Pages.SerasaModelPages;

public class DetailsModel : PageModel
{
    private readonly SerasaContext _context;
    public DetailsModel(SerasaContext context)
    {
        _context = context;
    }

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
}
