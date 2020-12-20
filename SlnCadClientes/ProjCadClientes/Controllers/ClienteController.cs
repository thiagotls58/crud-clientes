using Microsoft.AspNetCore.Mvc;

namespace ProjCadClientes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClienteController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
