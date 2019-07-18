using Repository.DataBase;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class EstadoRepository : IEstadoRepository
    {
        SistemaContext context;

        public EstadoRepository()
        {
            context = new SistemaContext();
        }

    }
}
