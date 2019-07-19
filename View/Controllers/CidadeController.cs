using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    public class CidadeController : Controller
    {
        private CidadeRepository repository;

        // GET: Cidade
        public ActionResult Index()
        {
            return View();
        }

    }
}