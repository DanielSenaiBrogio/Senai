using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Serasa.Models;

namespace Serasa.Pages.SerasaModelPages;

public class IndexModel : PageModel
{
    private readonly SerasaContext _context;

    public IndexModel(SerasaContext context)
    {
        _context = context;
    }

    public IList<SerasaModel> SerasaModel { get; set; } = default!;

    public async Task OnGetAsync()
    {
        SerasaModel = await _context.SerasaModel.ToListAsync();
    }
}
