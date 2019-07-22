using Model;
using Repository.DataBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class ClienteRepository
    {
        SistemaContext context;

        public ClienteRepository()
        {
            context = new SistemaContext();
        }
    }

    public bool Apagar(int id)
    {

    }

    public bool Atualizar(Cliente cliente)
    {

    }

    public int Inserir(Cliente cliente)
    {

    }

    public Cliente ObterPeloId(int id)
    {

    }

    public List<Cidade> ObterTodos(string busca)
    {

    }
}
