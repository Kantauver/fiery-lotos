using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace fieryLotos.Adapters.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        [Route("list")]
        [HttpGet, Authorize]
        public IEnumerable<string> GetArticlesList()
        {
            return new string[] { "Article 1", "Article 2" };
        }

        [Route("categories")]
        [HttpGet]
        public IEnumerable<string> GetArticlesCategories()
        {
            return new string[] { "Category 1", "Category 2", "Category 2" };
        }
    }
}
