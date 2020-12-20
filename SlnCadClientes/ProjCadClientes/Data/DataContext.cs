using Microsoft.EntityFrameworkCore;
using ProjCadClientes.Maps;
using ProjCadClientes.Models;

namespace ProjCadClientes.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Cliente> Clientes { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            #region mapeamento
            builder.ApplyConfiguration(new ClienteMap());
            #endregion mapeamento
        }
    }
}
