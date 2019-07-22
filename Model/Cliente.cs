﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("clientes")]
    public class Cliente: Base
    {
        [Column("id_cliente")]
        public int IdCliente { get; set; }

        [Column("nome")]
        public string Nome { get; set; }

        [Column("cpf")]
        public int Cpf { get; set; }

        [Column("data_nascimento")]
        public DateTime DataNascimento { get; set; }

        [Column("numero")]
        public int Numero { get; set; }

        [Column("complemento")]
        public string Complemento { get; set; }

        [Column("logradouro")]
        public string Logradouro { get; set; }

        [Column("cep")]
        public int Cep { get; set; }
    }
}
