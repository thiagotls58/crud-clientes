using Microsoft.EntityFrameworkCore;
using ProjCadClientes.Models;
using System.Linq;
using System.Threading.Tasks;

namespace ProjCadClientes.Data
{
    public class Repository : IRepository
    {
        private readonly DataContext _db;

        public Repository(DataContext db)
        {
            _db = db;
        }
        public void Add<T>(T entity) where T : class
        {
            _db.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            _db.Update(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _db.Remove(entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return (await _db.SaveChangesAsync()) > 0;
        }
        public async Task<Cliente[]> GetAllClientesAsync()
        {
            IQueryable<Cliente> query = _db.Clientes;
            query = query.AsNoTracking()
                         .OrderBy(c => c.ClienteId);

            return await query.ToArrayAsync();

        }
        public async Task<Cliente> GetClienteAsyncById(int clienteId)
        {
            IQueryable<Cliente> query = _db.Clientes;
            query = query.AsNoTracking()
                         .OrderBy(c => c.ClienteId)
                         .Where(c => c.ClienteId == clienteId);

            return await query.FirstOrDefaultAsync();
        }
        
    }
}
