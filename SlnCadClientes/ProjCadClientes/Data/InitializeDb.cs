using ProjCadClientes.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ProjCadClientes.Data
{
    public static class InitializeDb
    {
        public static List<Cliente> GetClientes()
        {
            var clientes = new List<Cliente>()
            {
                new Cliente
                {
                    Nome = "thiago luz de sousa",
                    DataNascimento = DateTime.Parse("06/05/1996"),
                    Sexo = "m",
                    Cep = "19031-230",
                    Endereco = "Rua Doutor José Carlos Franco de Carvalho",
                    Numero = 595,
                    Complemento = "",
                    Bairro = "Vila Áurea",
                    Estado = "SP",
                    Cidade = "Presidente Prudente",
                },
                new Cliente
                {
                    Nome = "devanir luz de sousa",
                    DataNascimento = DateTime.Parse("23/10/1974"),
                    Sexo = "m",
                    Cep = "19025-170",
                    Endereco = "Rua Ângelo Guissi",
                    Numero = 39,
                    Complemento = "",
                    Bairro = "Parque São Matheus",
                    Estado = "SP",
                    Cidade = "Presidente Prudente",
                }
            };
            return clientes;
        }
    }
}
