
using System;
using System.ComponentModel.DataAnnotations;

namespace ProjCadClientes.Models
{
    public class Cliente
    {
        public int ClienteId { get; set; }
        [Required(ErrorMessage = "O campo Nome é obrigatório.")]
        [MaxLength(100, ErrorMessage = "Tamanho máximo de 100 caracteres.")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "O campo Data de Nascimento é obrigatório.")]
        public DateTime DataNascimento { get; set; }
        [Required(ErrorMessage = "O campo Sexo é obrigatório.")]
        [MaxLength(100, ErrorMessage = "Tamanho máximo de 1 caractere.")]
        public string Sexo { get; set; }
        public string Cep { get; set; }
        public string Endereco { get; set; }
        public int Numero { get; set; }
        public string Complemento { get; set; }
        public string Bairro { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
    }
}
