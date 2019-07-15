import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculate-rental-cars',
  templateUrl: './calculate-rental-cars.component.html',
  styleUrls: ['./calculate-rental-cars.component.css']
})
export class CalculateRentalCarsComponent implements OnInit {
  slider_value:number = 1;
  order:any;

  rent(){
    
   var num = this.slider_value;
   var c = this.selectedCars
  
   if(c && num && num > 0){
    this.http.post("http://localhost:59775/api/Rental/rentCars",{c,num},{headers:{
      'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'post',
      'Authorization':'Basic ' + this.Token
    }}).subscribe(p => {
     this.order = p;
     this.router.navigate(['/user-page'], { queryParams: {token: this.Token}} );

    });
  }
  }

  goToCheckList(){
    this.router.navigate(['/cars-to-rent'], { queryParams: {token: this.Token}});
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/home-page']);
  }

  GetCars(){
   
    this.http.post("http://localhost:59775/api/Rental/GetCarsById",this.Ids,{headers:{
      'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get',
      'Authorization':'Basic ' + this.Token
    }}).subscribe(c =>{
      this.selectedCars = c;
      console.log(this.selectedCars);
    });
  
  }
  Token:string;
  selectedCars:any;
  total:number;
  Ids:any;


  constructor(private http:HttpClient, private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(p =>{

    this.Token = p.token;
    this.total = p.carsSelected;
    this.Ids = p.Id;
    console.log(p);
    this.GetCars();

    });
 
  }

}
