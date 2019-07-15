import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manneger-page',
  templateUrl: './manneger-page.component.html',
  styleUrls: ['./manneger-page.component.css']
})
export class MannegerPageComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router, private route: ActivatedRoute) { }

  Token:any;
  avilableCars:any;
  imageSrc:any;
  cars:any;
  eimageSrc:any;
  users:any;
  workers:any;
  cars_available_id:Array<number>;
  cars_not_id:Array<number>;
  imageSrcForRegister:any;
  mail = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required]);
  hide = true;
  orders:any;
  ordersIndex:Array<number>;

  wimageSrcForRegister:any;
  wmail = new FormControl('', [Validators.required, Validators.email]);
  wpass = new FormControl('', [Validators.required]);
  whide = true;

  deletCarNotAvailable(id){
    id = parseInt(id);
    this.http.post("http://localhost:59775/api/Rental/deletCarNotAvailable",{id},{headers:{
     'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post',
     'Authorization':'Basic ' + this.Token
   }}).subscribe(c => {
    this.cars = c;
    alert("new car has been deleted!");
     
   });
  }

  deletCarAvailable(id){
    id = parseInt(id);
    this.http.post("http://localhost:59775/api/Rental/deletCarAvailable",{id},{headers:{
     'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post',
     'Authorization':'Basic ' + this.Token
   }}).subscribe(c => {
    this.avilableCars = c;
    alert("new car has been deleted!");
     
   });
  }

  deletUser(id){
    id = parseInt(id);
    this.http.post("http://localhost:59775/api/Rental/deletUser",{id},{headers:{
     'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post',
     'Authorization':'Basic ' + this.Token
   }}).subscribe(u => {
    this.users = u;
    alert("new user has been deleted!");
     
   });
  }


  deletWorker(id){
    id = parseInt(id);
    this.http.post("http://localhost:59775/api/Rental/deletWorker",{id},{headers:{
     'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post',
     'Authorization':'Basic ' + this.Token
   }}).subscribe(w => {
    this.workers = w;
    alert("new worker has been deleted!");
     
   });
  }


  registerNewWorker(first_name,last_name,worker_id,
    user_name,password,img){


      var img =  this.wimageSrcForRegister;
 
   

   if(first_name && last_name && worker_id && password && user_name){
     this.http.post("http://localhost:59775/api/Rental/addWorker",{first_name,last_name,worker_id,
     user_name,password,img},{headers:{
      'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post',
      'Authorization':'Basic ' + this.Token
    }}).subscribe(w => {
     this.workers = w;
     alert("new worker added!");
      
    });
   }


    }

    wreadURL2(event): void {
      if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0];
       
          const reader = new FileReader();
          reader.readAsDataURL(file);
     
          reader.onload = (e) => {this.imageSrcForRegister = reader.result;}
      
    
      }
  }
  

  readURL2(event): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
     
        const reader = new FileReader();
        reader.readAsDataURL(file);
   
        reader.onload = (e) => {this.imageSrcForRegister = reader.result;}
    
  
    }
}

wgetErrorMessage(type:string) {
  if(type == "email"){
  return this.wmail.hasError('required') ? 'You must enter a value' :
      this.wmail.hasError('email') ? 'Not a valid email' : '';

        }
        if(type == "password"){
          return this.wmail.hasError('required') ? 'You must enter a value' :'';
                }

}

  getErrorMessage(type:string) {
    if(type == "email"){
    return this.mail.hasError('required') ? 'You must enter a value' :
        this.mail.hasError('email') ? 'Not a valid email' : '';

          }
          if(type == "password"){
            return this.mail.hasError('required') ? 'You must enter a value' :'';
                  }

  }


  editReadURL(event){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
     
      const reader = new FileReader();
      reader.readAsDataURL(file);
 
      reader.onload = (e) => {this.eimageSrc = reader.result;}
  

  }
  }

  editWorkersImg(event,id){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
     
      const reader = new FileReader();
      reader.readAsDataURL(file);
 
      reader.onload = (e) => {this.workers[parseInt(id)-1].img = reader.result;}
  }
}

editUsersImg(event,id){
  if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];
   
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {this.users[parseInt(id)-1].img = reader.result;}
}
}

  changeUser(user,fullName,userId,userName,password,bdate,gender,email){
   
    var id:number = 0;
    for(var i = 0;i < this.users.length;i++){
      if(user.userId == this.users[i].userId){
        id = i;
      }
    }
   
    if(!fullName){
      fullName = this.users[id].fullname;
    }

    if(!userName){
      userName = this.users[id].userName;
    }
    
    if(!userId){
      userId = this.users[id].userId;
    }

    
    if(!password){
      password = this.users[id].password;
    }

    
    if(!bdate){
      bdate = this.users[id].DBate;
    }

    
    if(!gender){
      gender = this.users[id].gender;
    }

    
    if(!email){
      email = this.users[id].email;
    }

    var date:Date;
    if(bdate instanceof Date){
     date = bdate;
    }

this.users[id].id = id;
this.users[id].fullName = fullName;
this.users[id].userId = userId;
this.users[id].userName = userName;
this.users[id].password = password;
this.users[id].BDate = date;
this.users[id].gender = gender;
this.users[id].email = email;
console.log(this.users[id - 1]);
    this.http.post("http://localhost:59775/api/Rental/editUser",this.users[id],{headers:{
      'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post',
      'Authorization':'Basic ' + this.Token
    }}).subscribe( r =>{
     this.users = r;
    });

  }

  editCar(id,Eproducer,Emodel,Ecost_per_day,Efinancial_penalty,
    Eproduction_year,Egear,car_number,banking_adress,banking_longitued,banking_name){

  

      if(!Eproducer){
       Eproducer = this.avilableCars[parseInt(id)].producer;
      }
      if(!Emodel){
        Emodel = this.avilableCars[parseInt(id)].model;
       }
       if(!Ecost_per_day){
        Ecost_per_day = this.avilableCars[parseInt(id)].cost_per_day;
       }
       if(!Efinancial_penalty){
        Efinancial_penalty = this.avilableCars[parseInt(id)].financial_penalty;
       }
       if(!Eproduction_year){
        Eproduction_year = this.avilableCars[parseInt(id)].production_year;
       }
       if(!Egear){
        Egear = this.avilableCars[parseInt(id)].gear;
       }

       if(!car_number){
        car_number = this.avilableCars[parseInt(id)].car_number;
       }

       if(!banking_adress){
        banking_adress = this.avilableCars[parseInt(id)].banking_adress;
       }

       if(!banking_longitued){
        banking_longitued = this.avilableCars[parseInt(id)].banking_longitued;
       }

       if(!banking_name){
        banking_name = this.avilableCars[parseInt(id)].banking_name;
       }
       
       var imageSrc

       if(this.eimageSrc){
         imageSrc = this.imageSrc;

       }else{
          imageSrc = this.avilableCars[parseInt(id)].img;
       }

       var date:Date;
       if(Eproduction_year instanceof Date){
           date = Eproduction_year;
       }
    
       this.avilableCars[parseInt(id)].producer = Eproducer
       this.avilableCars[parseInt(id)].model = Emodel;
       this.avilableCars[parseInt(id)].cost_per_day = Ecost_per_day;
       this.avilableCars[parseInt(id)].financial_penalty = Efinancial_penalty;
       this.avilableCars[parseInt(id)].production_year = date;
       this.avilableCars[parseInt(id)].gear = Egear;
       this.avilableCars[parseInt(id)].car_number = car_number;
       this.avilableCars[parseInt(id)].img = imageSrc;
       this.avilableCars[parseInt(id)].banking_adress = banking_adress;
       this.avilableCars[parseInt(id)].banking_longitued = banking_longitued;
       this.avilableCars[parseInt(id)].banking_name = banking_name;


       this.http.post("http://localhost:59775/api/Rental/editCar",this.avilableCars[id],{headers:{
         'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post',
         'Authorization':'Basic ' + this.Token
       }}).subscribe( r =>{
        this.avilableCars = r;
       });
     
    }


    editCarNot(id,Eproducer,Emodel,Ecost_per_day,Efinancial_penalty,
      Eproduction_year,Egear,car_number,banking_adress,banking_longitued,banking_name){
  
        if(!Eproducer){
         Eproducer = this.cars[parseInt(id)].producer;
        }
        if(!Emodel){
          Emodel = this.cars[parseInt(id)].model;
         }
         if(!Ecost_per_day){
          Ecost_per_day = this.cars[parseInt(id)].cost_per_day;
         }
         if(!Efinancial_penalty){
          Efinancial_penalty = this.cars[parseInt(id)].fainancial_penalty;
         }
         if(!Eproduction_year){
          Eproduction_year = this.cars[parseInt(id)].production_year;
         }
         if(!Egear){
          Egear = this.cars[parseInt(id)].gear;
         }
  
         if(!car_number){
          car_number = this.cars[parseInt(id)].car_number;
         }
         

         if(!banking_adress){
          banking_adress = this.cars[parseInt(id)].banking_adress;
         }
  
         if(!banking_longitued){
          banking_longitued = this.cars[parseInt(id)].banking_longitued;
         }
  
         if(!banking_name){
          banking_name = this.cars[parseInt(id)].banking_name;
         }
         
         var date:Date;
         if(Eproduction_year instanceof Date){
             date = Eproduction_year;
         }
      
         this.cars[parseInt(id)].producer = Eproducer
         this.cars[parseInt(id)].model = Emodel;
         this.cars[parseInt(id)].cost_per_day = Ecost_per_day;
         this.cars[parseInt(id)].financial_penalty = Efinancial_penalty;
         this.cars[parseInt(id)].production_year = date;
         this.cars[parseInt(id)].gear = Egear;
         this.cars[parseInt(id)].car_number = car_number;
         this.cars[parseInt(id)].banking_adress = banking_adress;
         this.cars[parseInt(id)].banking_longitued = banking_longitued;
         this.cars[parseInt(id)].banking_name = banking_name;
  
         this.http.post("http://localhost:59775/api/Rental/editCarNot",this.cars[id - 1],{headers:{
           'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post',
           'Authorization':'Basic ' + this.Token
         }}).subscribe( r =>{
          this.avilableCars = r;
         });
       
      }



  
  getCars(){
    this.http.get("http://localhost:59775/api/Rental/getCars",{headers:{
      'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get',
      'Authorization':'Basic ' + this.Token
    }}).subscribe(c =>{
      this.cars = c;
      this.cars_not_id = new Array<number>(this.cars.length);
      for(var i = 0;i < this.cars_not_id.length;i++){
        this.cars_not_id[i] = i;
      }
    });
  
  }

  addCar(producer,model,cost_per_day,financial_penalty,
    production_year,gear){
     var imageSrc = this.imageSrc;
      this.http.post("http://localhost:59775/api/Rental/addCar",{producer,model,cost_per_day,financial_penalty,
      production_year,gear,imageSrc},{headers:{
        'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get',
        'Authorization':'Basic ' + this.Token
      }}).subscribe( c =>{
        this.avilableCars = c;
      });

  }

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        var str:string = event.target.id;
        const reader = new FileReader();
        reader.readAsDataURL(file);
   
        reader.onload = (e) => {this.imageSrc = reader.result;}
    
  
    }
}

  logOut(){
    localStorage.removeItem('token');
     this.router.navigate(['/home-page']);
  }

  returnCarNot(car){
    this.http.post("http://localhost:59775/api/Rental/returnCar",car,{headers:{
      'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post',
      'Authorization':'Basic ' + this.Token
    }}).subscribe( r =>{
      this.cars = r;
    });
  }
  
GetCars(){
  this.http.get("http://localhost:59775/api/Rental/GetCarsAvailable",{headers:{
    'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get',
    'Authorization':'Basic ' + this.Token
  }}).subscribe(p =>{
      this.avilableCars = p;
      this.cars_available_id = new Array<number>(this.avilableCars.length);

      for(var i = 0;i < this.cars_available_id.length;i++){
        this.cars_available_id[i] = i;
      }
      console.log(this.cars_available_id);
  });

}

GetUsers(){
  this.http.get("http://localhost:59775/api/Rental/GetUsers",{headers:{
    'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get',
    'Authorization':'Basic ' + this.Token
  }}).subscribe(u =>{
      this.users = u;
  });
}

getWorkers(){
  this.http.get("http://localhost:59775/api/Rental/GetWorkers",{headers:{
    'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get',
    'Authorization':'Basic ' + this.Token
  }}).subscribe(w =>{
      this.workers = w;
  });
}

registerNewUser(fullName:string,Id:number,
  userName:string,password,BDate,gender:string,email){

  var img =  this.imageSrcForRegister;
  
 

var date = BDate;
 
   

   if(fullName && Id && userName && password && gender && email){
     this.http.post("http://localhost:59775/api/Rental/NewUser",{fullName,Id,
    userName,password,date,gender,email,img},{headers:{
      'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post',
      'Authorization':'Basic ' + this.Token
    }}).subscribe(u => {
     this.users = u;
      
    });
   }

}

GetOrders(){
  this.http.get("http://localhost:59775/api/Rental/GetOrders",{headers:{
    'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get',
    'Authorization':'Basic ' + this.Token
  }}).subscribe(o =>{
      this.orders = o;
      this.ordersIndex = new Array<number>(this.orders.length);
      for(var i = 0;i < this.ordersIndex.length;i++){
        this.ordersIndex[i] = i;
      }
  });
}

deletOrder(id:number){
  this.http.post("http://localhost:59775/api/Rental/deletOrder",{id},{headers:{
    'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post',
    'Authorization':'Basic ' + this.Token
  }}).subscribe(o =>{
      this.orders = o;
      this.ordersIndex = new Array<number>(this.orders.length);
      for(var i = 0;i < this.ordersIndex.length;i++){
        this.ordersIndex[i] = i;
      }
  });
}

editOrders(userId,oproducer,omodel,ocost_per_day,ofinancial_penalty,
  oproduction_year,ogaer,obanking_adress,obanking_longitude,obanking_name,
  ostart_renting_date,oactually_returning_date,oreturning_date,ocar_number){

    if(oproducer){
       this.orders[userId].producer = oproducer;
    }

    if(omodel){
      this.orders[userId].model = omodel;
    }

    
    if(ocost_per_day){
      this.orders[userId].cost_per_day = ocost_per_day;
    }

    
    if(ofinancial_penalty){
      this.orders[userId].financial_penalty = ofinancial_penalty;
    }

    
    if(oproduction_year){
      this.orders[userId].production_year = oproduction_year;
    }

    
    if(ogaer){
      this.orders[userId].gear = ogaer;
    }

    
    if(obanking_adress){
      this.orders[userId].banking_adress = obanking_adress;
    }

    
    if(obanking_longitude){
      this.orders[userId].banking_longitued = obanking_longitude;
    }

    
    if(obanking_name){
      this.orders[userId].banking_name = obanking_name;
    }

    
    if(ostart_renting_date){
      this.orders[userId].start_renting_date = ostart_renting_date;
    }

    
    if(oactually_returning_date){
      this.orders[userId].actually_returning_date = oactually_returning_date;
    }

    
    if(oreturning_date){
      this.orders[userId].returning_date = oreturning_date;
    }

    
    if(ocar_number){
      this.orders[userId].car_number = ocar_number;
    }

    console.log(userId);

  this.http.post("http://localhost:59775/api/Rental/editOrders",this.orders[userId],{headers:{
    'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post',
    'Authorization':'Basic ' + this.Token
  }}).subscribe(o =>{
      this.orders = o;
  });
}

changeWorker(worker,first_name,last_name,
  worker_id,userName,password){
var id:number = 0;
for(var i = 0;i < this.workers.length;i++){
  if(this.workers[i].worker_id == worker.worker_id){
    id = i
  }
}
    if(first_name){
       this.workers[id].first_name = first_name;

    }

    if(last_name){
      this.workers[id].last_name = last_name;
      
   }

   if(worker_id){
    this.workers[id].worker_id = worker_id;
    
 }

 if(userName){
  this.workers[id].userName = userName;
  
}

if(password){
  this.workers[id].password = password;
  
}
console.log(id);

    this.http.post("http://localhost:59775/api/Rental/editWorker",this.workers[id],{headers:{
      'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post',
      'Authorization':'Basic ' + this.Token
    }}).subscribe( r =>{
     this.workers = r;
    });
    
  }



  ngOnInit() {

    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.Token = params.token;
      this.GetCars();
      this.getCars();
      this.GetUsers();
      this.getWorkers();
      this.GetOrders();
  });
}


}
