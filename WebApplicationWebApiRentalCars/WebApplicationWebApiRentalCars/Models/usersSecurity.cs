using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplicationWebApiRentalCars.Models
{
    public class usersSecurity
    {
       public static bool Login(string userName,string password)
        {
            using(rentalCarsEntities entities = new rentalCarsEntities())
            {
               return entities.Users.Any(u => u.userName == userName && u.password == password);
            }
        }
    }
}