using Model;
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

        public bool Aoagar(int id)
        {
            throw new NotImplementedException();
        }

        public bool Atualizar(Estado estado)
        {
            throw new NotImplementedException();
        }

        public int Inserir(Estado estado)
        {
            throw new NotImplementedException();
        }

        public Estado ObterPeloId(int id)
        {
            throw new NotImplementedException();
        }

        public List<Estado> ObterTodos(string busca)
        {
            throw new NotImplementedException();
        }
    }
}
