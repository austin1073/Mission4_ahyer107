/*Austin Hyer
    2-6-22
    IS 413
    Mission #5
*/
using Microsoft.AspNetCore.Mvc;
using Mission4_ahyer107.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_ahyer107.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View(); 
        }

//Two different classes for get and post - loading the page with the form and submitting the form
        [HttpGet]
        public IActionResult gradeCalc()
        {
            return View();
        }

        [HttpPost] //Attribute that we are attaching to the method
        public IActionResult gradeCalc(CalcModel model)
        {
            return View();
        }

    }
}
