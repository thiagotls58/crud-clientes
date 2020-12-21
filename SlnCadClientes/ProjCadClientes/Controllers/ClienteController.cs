using Microsoft.AspNetCore.Mvc;
using ProjCadClientes.Data;
using ProjCadClientes.Models;
using System;
using System.Threading.Tasks;

namespace ProjCadClientes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClienteController : Controller
    {
        private readonly IRepository _repo;

        public ClienteController(IRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _repo.GetAllClientesAsync();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpGet("{ClienteId}")]
        public async Task<IActionResult> GetByAlunoId(int ClienteId)
        {
            try
            {
                var result = await _repo.GetClienteAsyncById(ClienteId);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> post(Cliente model)
        {
            try
            {
                _repo.Add(model);

                if (await _repo.SaveChangesAsync())
                {
                    return Ok(model);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpPut("{ClienteId}")]
        public async Task<IActionResult> put(int ClienteId, Cliente model)
        {
            try
            {
                var cliente = await _repo.GetClienteAsyncById(ClienteId);
                if (cliente == null) 
                    return NotFound();

                _repo.Update(model);

                if (await _repo.SaveChangesAsync())
                {
                    return Ok(model);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpDelete("{ClienteId}")]
        public async Task<IActionResult> delete(int ClienteId)
        {
            try
            {
                var cliente = await _repo.GetClienteAsyncById(ClienteId);
                if (cliente == null) return NotFound();

                _repo.Delete(cliente);

                if (await _repo.SaveChangesAsync())
                {
                    return Ok(new { message = $"Cliente {ClienteId} excluído." });
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpGet("initializeDb")]
        public async Task<IActionResult> initializeDb()
        {
            try
            {
                var clientes = InitializeDb.GetClientes();

                foreach (var cliente in clientes)
                {
                    _repo.Add(cliente);
                }

                if (await _repo.SaveChangesAsync())
                {
                    return Ok(new { message = "OK" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }
    }
}
