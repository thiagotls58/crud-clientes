
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjCadClientes.Models;

namespace ProjCadClientes.Maps
{
    public class ClienteMap : IEntityTypeConfiguration<Cliente>
    {
        public void Configure(EntityTypeBuilder<Cliente> builder)
        {
            builder.ToTable("cliente");
            builder.HasKey(c => c.ClienteId);
            builder.Property(c => c.ClienteId).HasColumnName("id").IsRequired();
            builder.Property(c => c.Nome).HasColumnName("nome").IsRequired();
            builder.Property(c => c.DataNascimento).HasColumnName("data_nascimento").IsRequired();
            builder.Property(c => c.Sexo).HasColumnName("sexo").IsRequired();
            builder.Property(c => c.Cep).HasColumnName("cep").IsRequired();
            builder.Property(c => c.Endereco).HasColumnName("endereco").IsRequired();
            builder.Property(c => c.Numero).HasColumnName("numero").IsRequired();
            builder.Property(c => c.Complemento).HasColumnName("complemento").IsRequired();
            builder.Property(c => c.Bairro).HasColumnName("bairro").IsRequired();
            builder.Property(c => c.Estado).HasColumnName("estado").IsRequired();
            builder.Property(c => c.Cidade).HasColumnName("cidade").IsRequired();
        }
    }
}
