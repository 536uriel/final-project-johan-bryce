using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplicationWebApiRentalCars.Models
{
    public class workersSecurity
    {
        public static bool Login(string userName, string password)
        {
            using (rentalCarsEntities entities = new rentalCarsEntities())
            {
                return entities.Workers.Any(u => u.user_name == userName && u.password == password);
            }
        }
    }
}