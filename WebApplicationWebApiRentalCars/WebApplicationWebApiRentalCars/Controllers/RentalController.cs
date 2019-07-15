using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Script.Serialization;
using WebApplicationWebApiRentalCars.Models;

namespace WebApplicationWebApiRentalCars.Controllers
{
    [EnableCors(origins:"*", headers:"*", methods:"*")]
    public class RentalController : ApiController
    {
        [BasicAuthentication]
        [Route("api/Rental/GetOrders")]
        [HttpGet]
        public HttpResponseMessage GetOrders()
        {
            rentalCarsEntities entities = new rentalCarsEntities();
            return Request.CreateResponse(HttpStatusCode.OK, entities.orders.ToList());
        }

        [BasicAuthentication]
        [Route("api/Rental/deletCarNotAvailable")]
        [HttpPost]
        public HttpResponseMessage deletCarNotAvailable(Id id)
        {
            rentalCarsEntities entities = new rentalCarsEntities();
            var car = entities.cars_not_avalable.FirstOrDefault(u => u.id == id.id);
            entities.cars_not_avalable.Remove(car);
            entities.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, entities.cars_not_avalable.ToList());
        }


        [BasicAuthentication]
        [Route("api/Rental/deletCarAvailable")]
        [HttpPost]
        public HttpResponseMessage deletCarAvailable(Id id)
        {
            rentalCarsEntities entities = new rentalCarsEntities();
            var car = entities.cars_model_available.FirstOrDefault(u => u.id == id.id);
            entities.cars_model_available.Remove(car);
            entities.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, entities.cars_model_available.ToList());
        }

        [BasicAuthentication]
        [Route("api/Rental/deletWorker")]
        [HttpPost]
        public HttpResponseMessage deletWorker(Id id)
        {
            rentalCarsEntities entities = new rentalCarsEntities();
            var worker = entities.Workers.FirstOrDefault(u => u.id == id.id);
            entities.Workers.Remove(worker);
            entities.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, entities.Workers.ToList());
        }

        [BasicAuthentication]
        [Route("api/Rental/deletUser")]
        [HttpPost]
        public HttpResponseMessage deletUser(Id id)
        {
            rentalCarsEntities entities = new rentalCarsEntities();
            var user = entities.Users.FirstOrDefault(u => u.id == id.id);
            entities.Users.Remove(user);
            entities.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, entities.Users.ToList());
        }


        [BasicAuthentication]
        [Route("api/Rental/addWorker")]
        [HttpPost]
        public HttpResponseMessage addWorker(Workers worker)
        {
            rentalCarsEntities entities = new rentalCarsEntities();
            Workers w = new Workers();

            w.first_name = worker.first_name;
            w.id = worker.id;
            w.img = worker.img;
            w.last_name = worker.last_name;
            w.password = worker.password;
            w.user_name = worker.user_name;
            w.worker_id = worker.worker_id;

            entities.Workers.Add(w);
            entities.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, entities.Workers.ToList());


        }

        [BasicAuthentication]
        [Route("api/Rental/getUserOrder")]
        [HttpGet]
        public HttpResponseMessage getUserOrder()
        {
            
            string userId = Thread.CurrentPrincipal.Identity.Name;

            using (rentalCarsEntities entities = new rentalCarsEntities())
            {
                return Request.CreateResponse(HttpStatusCode.OK, entities.orders.Where(o => o.userId == userId).ToList());
            }
            
               
        }


        [BasicAuthentication]
        [Route("api/Rental/deletOrder")]
        [HttpPost]
        public HttpResponseMessage deletOrder(Id id)
        {
            rentalCarsEntities entities = new rentalCarsEntities();

            entities.orders.Remove(entities.orders.FirstOrDefault(i => i.id == id.id));
            entities.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, entities.orders.ToList());
        }

        [BasicAuthentication]
        [Route("api/Rental/editOrders")]
        [HttpPost]
        public HttpResponseMessage editOrders(orders order)
        {
            rentalCarsEntities entities = new rentalCarsEntities();

            var newOrder = entities.orders.FirstOrDefault(o => o.userId == order.userId);

            newOrder.actually_returning_date = order.actually_returning_date;
            newOrder.bamking_name = order.bamking_name;
            newOrder.banking_address = order.banking_address;
            newOrder.banking_longitude = order.banking_longitude;
            newOrder.car_number = order.car_number;
            newOrder.cost_per_day = order.cost_per_day;
            newOrder.financial_penalty = order.financial_penalty;
            newOrder.gear = order.gear;
            newOrder.model = order.model;
            newOrder.producer = order.producer;
            newOrder.production_year = order.production_year;
            newOrder.returning_date = order.returning_date;
            newOrder.start_renting_date = order.start_renting_date;

            return Request.CreateResponse(HttpStatusCode.OK, entities.orders.ToList());

        }


        [BasicAuthentication]
        [Route("api/Rental/editWorker")]
        [HttpPost]
        public HttpResponseMessage editWorker(Workers worker)
        {
            using (rentalCarsEntities entities = new rentalCarsEntities())
            {
              var item =   entities.Workers.FirstOrDefault(x => x.id == worker.id);
                item.img = worker.img;
                item.last_name = worker.last_name;
                item.first_name = worker.last_name;
                item.worker_id = worker.worker_id;
                item.user_name = worker.user_name;
                item.password = worker.password;
                item.id = worker.id;
                
                // entities.Workers.Remove(entities.Workers.FirstOrDefault(u => u.id == worker.id));
               // entities.Workers.Add(worker);
                entities.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK, entities.Workers.ToList());
            }
        }

        [BasicAuthentication]
        [Route("api/Rental/editUser")]
        [HttpPost]
        public HttpResponseMessage editUser(Users user)
        {
            using (rentalCarsEntities entities = new rentalCarsEntities())
            {
               var item = entities.Users.FirstOrDefault(u => u.id == user.id);
                item.BDate = user.BDate;
                item.email = user.email;
                item.fullName = user.fullName;
                item.gender = user.gender;
                item.id = user.id;
                item.img = user.img;
                item.password = user.password;
                item.userId = user.userId;
                item.userName = user.userName;
                
                entities.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK, entities.Users.ToList());
            }
        }

        [BasicAuthentication]
        [Route("api/Rental/GetCarsById")]
        [HttpPost]
        public HttpResponseMessage GetCarsById(int[] id)
        {
            using (rentalCarsEntities entities = new rentalCarsEntities())
            {
                string username = Thread.CurrentPrincipal.Identity.Name;

                List<cars_model_available> cars = new List <cars_model_available>(0);
             
                foreach(var i in id)
                {
                 cars.Add(entities.cars_model_available.FirstOrDefault(c => c.id == i));
                   
                }
                return Request.CreateResponse(HttpStatusCode.OK,cars);
            }
        }

        [BasicAuthentication]
        [Route("api/Rental/editCarNot")]
        [HttpPost]
        public HttpResponseMessage editCarNot(cars_not_avalable newCar)
        {
            using (rentalCarsEntities entities = new rentalCarsEntities())
            {

                cars_not_avalable car = entities.cars_not_avalable.FirstOrDefault(c => c.id == newCar.id);



                car.banking_adrress = newCar.banking_adrress;
                car.banking_longitude = newCar.banking_longitude;
                car.banking_name = newCar.banking_name;
                car.car_number = newCar.car_number;
                car.cost_per_day = newCar.cost_per_day;
                car.fainancial_penalty = newCar.fainancial_penalty;
                car.gear = newCar.gear;
                car.img = newCar.img;
                car.model = newCar.model;
                car.producer = newCar.producer;
                car.production_year = newCar.production_year;
              

                entities.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK, entities.cars_not_avalable.ToList());

            }
        }


        [BasicAuthentication]
        [Route("api/Rental/editCar")]
        [HttpPost]
        public HttpResponseMessage editCar(cars_model_available newCar)
        {
            using (rentalCarsEntities entities = new rentalCarsEntities())
            {

               cars_model_available car = entities.cars_model_available.FirstOrDefault(c => c.id == newCar.id);


                car.banking_adress = newCar.banking_adress;
                car.banking_longitued = newCar.banking_longitued;
                car.banking_name = newCar.banking_name;
                car.car_number = newCar.car_number;
                car.cost_per_day = newCar.cost_per_day;
                car.financial_penalty = newCar.financial_penalty;
                car.gear = newCar.gear;
                car.img = newCar.img;
                car.producer = newCar.producer;
                car.production_year = newCar.production_year;
              

                entities.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK,entities.cars_model_available.ToList());

            }
        }

        [BasicAuthentication]
        [Route("api/Rental/addCar")]
        [HttpPost]
        public HttpResponseMessage addCar(cars_model_available car)
        {
            using (rentalCarsEntities entities = new rentalCarsEntities())
            {
                cars_model_available car_avilable = new cars_model_available();

                car_avilable.cost_per_day = car.cost_per_day;
                car_avilable.car_number = car.car_number;
                car_avilable.financial_penalty = car.financial_penalty;
                car_avilable.gear = car.gear;
                car_avilable.model = car.model;
                car_avilable.producer = car.producer;
                car_avilable.production_year = car.production_year;
                car_avilable.img = car.img;
                car_avilable.banking_adress = car.banking_adress;
                car_avilable.banking_longitued = car.banking_longitued;
                car_avilable.banking_name = car.banking_name;
           

                entities.cars_model_available.Add(car_avilable);
                entities.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK,entities.cars_model_available.ToList());

            }
        }

        [Route("api/Rental/GetCarsForEveryone")]
        [HttpGet]
        public HttpResponseMessage GetCarsForEveryone()
        {
            rentalCarsEntities entities = new rentalCarsEntities();

            return Request.CreateResponse(HttpStatusCode.OK, entities.cars_model_available.ToList());
        }


        [BasicAuthentication]
        [Route("api/Rental/returnCar")]
        [HttpPost]
        public HttpResponseMessage returnCar(cars_not_avalable car)
        {
            using(rentalCarsEntities entities = new rentalCarsEntities())
            {
                cars_model_available car_avilable = new cars_model_available();
     




                car_avilable.cost_per_day = car.cost_per_day;
                car_avilable.car_number = car.car_number;
                car_avilable.financial_penalty = car.fainancial_penalty;
                car_avilable.gear = car.gear;
                car_avilable.model = car.model;
                car_avilable.producer = car.producer;
                car_avilable.production_year = car.production_year;
                car_avilable.img = car.img;
                car_avilable.banking_adress = car.banking_adrress;
                car_avilable.banking_longitued = car.banking_longitude;
                car_avilable.banking_name = car.banking_name;
             

                entities.cars_model_available.Add(car_avilable);

                var car_not = entities.cars_not_avalable.FirstOrDefault(c => c.id == car.id);
                var order = entities.orders.FirstOrDefault(c => c.car_number == car_not.car_number);

                if (order != null)
                {
                    order.actually_returning_date = DateTime.Now;
                }

                entities.cars_not_avalable.Remove(car_not);
                entities.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK,entities.cars_not_avalable.ToList());

            }
        }

        [BasicAuthentication]
        [Route("api/Rental/rentCars")]
        [HttpPost]
        public HttpResponseMessage rentCars(rent cars)
        {

            string userId = Thread.CurrentPrincipal.Identity.Name;

            using (rentalCarsEntities entities = new rentalCarsEntities())
            {
              foreach(var car in cars.c)
                {
                    cars_not_avalable cars_not = new cars_not_avalable();

                    orders order = new orders();

                    order.bamking_name = car.banking_name;
                    order.banking_address = car.banking_adress;
                    order.banking_longitude = car.banking_longitued;
                    order.cost_per_day = car.cost_per_day;
                    order.financial_penalty = car.financial_penalty;
                    order.gear = car.gear;
                    order.model = car.model;
                    order.producer = car.producer;
                    order.production_year = car.production_year;
                    order.userId = userId;
                    order.start_renting_date = DateTime.Now;
                    order.car_number = car.car_number;
                    order.returning_date = DateTime.Now.AddDays(cars.num);

                    entities.orders.Add(order);

                    cars_not.cost_per_day = car.cost_per_day;
                    cars_not.car_number = car.car_number;
                    cars_not.fainancial_penalty = car.financial_penalty;
                    cars_not.gear = car.gear;
                    cars_not.model = car.model;
                    cars_not.producer = car.producer;
                    cars_not.production_year = car.production_year;
                    cars_not.img = car.img;
                    cars_not.id = car.id;
                    cars_not.banking_adrress = car.banking_adress;
                    cars_not.banking_longitude = car.banking_longitued;
                    cars_not.banking_name = car.banking_name;

                 
                    entities.cars_model_available.Remove(entities.cars_model_available.FirstOrDefault(c => c.id == car.id));

                    entities.cars_not_avalable.Add(cars_not);
             


                }

                entities.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK,cars);
            }
        }


        [BasicAuthentication]
        [Route("api/Rental/GetWorkers")]
        [HttpGet]
        public HttpResponseMessage GetWorkers()
        {
            using (rentalCarsEntities entities = new rentalCarsEntities())
            {
                string username = Thread.CurrentPrincipal.Identity.Name;
                return Request.CreateResponse(HttpStatusCode.OK, entities.Workers.ToList());
            }
        }

        [BasicAuthentication]
        [Route("api/Rental/getCars")]
        [HttpGet]
        public HttpResponseMessage GetCars()
        {
            using (rentalCarsEntities entities = new rentalCarsEntities())
            {
                string username = Thread.CurrentPrincipal.Identity.Name;
                return Request.CreateResponse(HttpStatusCode.OK, entities.cars_not_avalable.ToList());
            }
        }

        [BasicAuthentication]
        [Route("api/Rental/GetCarsAvailable")]
        [HttpGet]
        public HttpResponseMessage GetCarsAvailable()
        {
            using (rentalCarsEntities entities = new rentalCarsEntities())
            {
                string username = Thread.CurrentPrincipal.Identity.Name;
                return Request.CreateResponse(HttpStatusCode.OK, entities.cars_model_available.ToList());
            }
        }

        [BasicAuthentication]
        [Route("api/Rental/GetUsers")]
        [HttpGet]
        public HttpResponseMessage GetUsers()
        {
            using (rentalCarsEntities entities = new rentalCarsEntities())
            {
                string username = Thread.CurrentPrincipal.Identity.Name;
                return Request.CreateResponse(HttpStatusCode.OK, entities.Users.ToList());
            }
        }

        [BasicAuthentication]
        [Route("api/Rental/getPerson")]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            using (rentalCarsEntities entities = new rentalCarsEntities())
            {
                string authenticationToken = Thread.CurrentPrincipal.Identity.Name;
                string decodedAuthenticationToken = Encoding.UTF8.GetString(
                 Convert.FromBase64String(authenticationToken));
                string[] usernamePasswordArray = decodedAuthenticationToken.Split(':');
                string username = usernamePasswordArray[0];
                return Request.CreateResponse(HttpStatusCode.OK,entities.Users.FirstOrDefault(u => u.userName == username));
            }
        }

        [Route("api/Rental/loginManneger")]
        [HttpPost]
        public HttpResponseMessage loginManneger(userpassword uspas)
        {
            if (mannegerSecurity.Login(uspas.userName, uspas.password))
            {
                return Request.CreateResponse(HttpStatusCode.OK,
                    EncodingForBase64.EncodeBase64(Encoding.UTF8, uspas.userName + ":" + uspas.password));

            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, uspas);
            }

        }

        [Route("api/Rental/loginWorker")]
        [HttpPost]
        public HttpResponseMessage LoginWorker(userpassword uspas)
        {




            if (workersSecurity.Login(uspas.userName, uspas.password))
            {
                return Request.CreateResponse(HttpStatusCode.OK,
                    EncodingForBase64.EncodeBase64(Encoding.UTF8, uspas.userName + ":" + uspas.password));
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, uspas);
            }

        }

        [Route("api/Rental/postLogin")]
        [HttpPost]
        public HttpResponseMessage PostLogin(userpassword uspas)
        {


           

                if (usersSecurity.Login(uspas.userName, uspas.password))
                {
                    return Request.CreateResponse(HttpStatusCode.OK,
                        EncodingForBase64.EncodeBase64(Encoding.UTF8, uspas.userName + ":" + uspas.password));
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, uspas);
                }
            
        }

     
        [HttpPost,Route("api/Rental/NewUser")]
        public HttpResponseMessage PostNewUser(userInfo user)
        {
            using(rentalCarsEntities entities = new rentalCarsEntities())
            {
                if (entities.Users.Any(u => u.email == user.email))
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, user.email);
                }
                else
                {
                    if (entities.Users.Any(u => u.userName == user.userName))
                    {
                        return Request.CreateResponse(HttpStatusCode.BadRequest, user.userName);
                    }
                    else
                    {
                        Users users = new Users();
                        users.userName = user.userName;
                        users.userId = user.Id;
                        users.email = user.email;
                        users.password = user.password;
                        users.fullName = user.fullName;
                        users.BDate = user.BDate;
                        users.img = user.img;
                        users.gender = user.gender;

                        entities.Users.Add(users);
                        entities.SaveChanges();

                        return Request.CreateResponse(HttpStatusCode.OK, entities.Users.ToList());


                    }
                }
               
            }
        }
       
    }

  

    public class userInfo : userpassword
    {
        public string fullName;
        public int Id;
        public DateTime BDate;
        public string gender;
        public string email;
        public string img;


    }

    public class userpassword
    {
       public string userName;
        public string password;
        
    }

    public class Id
    {
        public int id;
    }

    public class rent
    {
        public List<cars_model_available> c;
        public double num;
    }




}
