using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    public class TarefaController : Controller
    {
        TarefaRepository repository;

        public TarefaController()
        {
            repository = new TarefaRepository();
        }

        // GET: Tarefa
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }
    }
}