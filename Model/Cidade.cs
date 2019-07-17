using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("cidades")]
    public class Cidade
    {
        [Column ("id")]
        public int Id { get; set; }

        [Column("id_estado")]
        public int IdEstado { get; set; }

        [Column("numero_habitante")]
        public int NumeroHabitante { get; set; }
    }
}
