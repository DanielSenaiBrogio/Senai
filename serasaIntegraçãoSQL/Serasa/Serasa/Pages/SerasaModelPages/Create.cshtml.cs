using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Serasa.Models;

namespace Serasa.Pages.SerasaModelPages;

public class CreateModel : PageModel
{
    private readonly SerasaContext _context;

    public CreateModel(SerasaContext context)
    {
        _context = context;
    }

    public IActionResult OnGet()
    {
        return Page();
    }

    [BindProperty]
    public SerasaModel SerasaModel { get; set; } = default!;

    // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD.
    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        _context.SerasaModel.Add(SerasaModel);
        await _context.SaveChangesAsync();

        return RedirectToPage("./Index");
    }
}
