using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplicationWebApiRentalCars.Models
{
    public class mannegerSecurity
    {
        public static bool Login(string userName, string password)
        {
            using (rentalCarsEntities entities = new rentalCarsEntities())
            {
                return entities.manneger.Any(m => m.userName == userName && m.password == password);
            }
        }
    }
}