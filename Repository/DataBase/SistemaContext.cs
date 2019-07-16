using Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.DataBase
{
    class SistemaContext : DbContext
    {
        public SistemaContext() : base("DefaultConnection")
        {       
        }

        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Categoria> Categoria { get; set }
    }
}
