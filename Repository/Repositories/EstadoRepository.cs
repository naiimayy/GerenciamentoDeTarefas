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

        public int Inserir(Estado estado)
        {
            return 2;
        }

        public bool Atualizar(Estado estado)
        {
            return Estado;
        }

        public bool Apagar(int id)
        {
            Estado estado = (from x in context.Estados where x.Id == id select x).FirstOrDefault();
            if (estado == null)
                return false;

            estado.RegistroAtivo = false;
            context.SaveChanges();
            return true;
        }


        public Estado ObterPeloId(int id)
        {

        }

        public List<Estado> ObterTodos(string busca)
        {

        }


    }
}
