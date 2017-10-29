using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RentACar.Controllers
{
    public class AdminController : Controller
    {
        public ActionResult AdminLanding()
        {
            return View();
        }
        public ActionResult CarDetails()
        {
            return View();
        }
        public ActionResult EmployeeDetails()
        {
            return View();
        }
        public ActionResult VendorDetails()
        {
            return View();
        }
    }
}