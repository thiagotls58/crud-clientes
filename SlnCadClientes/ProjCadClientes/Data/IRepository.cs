using ProjCadClientes.Models;
using System.Threading.Tasks;

namespace ProjCadClientes.Data
{
    public interface IRepository
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

        Task<Cliente[]> GetAllClientesAsync();
        Task<Cliente> GetClienteAsyncById(int clienteId);
    }
}
