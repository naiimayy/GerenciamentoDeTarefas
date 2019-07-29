using Model;
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
            UsuarioRepository URepository = new UsuarioRepository();
            ViewBag.Usuarios = URepository.ObterTodos("");

            ProjetoRepository PRepository = new ProjetoRepository();
            ViewBag.Projetos = PRepository.ObterTodos("");

            CategoriaRepository CRepository = new CategoriaRepository();
            ViewBag.Categorias = CRepository.ObterTodos("");

            return View();
        }

        [HttpGet]
        public JsonResult ObterTodos()
        {
            List<Tarefa> tarefas = repository.ObterTodos("");
            return Json(tarefas, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Store(Tarefa tarefa)
        {
            tarefa.RegistroAtivo = true;
            repository.Inserir(tarefa);
            return Json(tarefa);
        }

        [HttpGet, Route("apagar/{id}")]
        public JsonResult Apagar(int id)
        {
            bool apagou = repository.Apagar(id);
            return Json(new { status = apagou }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet, Route("obterpeloId/{id}")]
        public JsonResult ObterPeloId(int id)
        {
            Tarefa tarefa = repository.ObterPeloId(id);
            return Json(tarefa, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Update(Tarefa tarefa)
        {
            bool alterou = repository.Atualizar(tarefa);
            return Json(new { status = alterou });
        }
    }
}