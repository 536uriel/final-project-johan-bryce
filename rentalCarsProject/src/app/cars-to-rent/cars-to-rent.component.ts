import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cars-to-rent',
  templateUrl: './cars-to-rent.component.html',
  styleUrls: ['./cars-to-rent.component.css']
})
export class CarsToRentComponent implements OnInit {

  Token:string;
  cars:Array<any>;
  selectedCar:Array<any> = new Array<any>(0);
  id:Array<number>;
  counterId:Array<number>;


  rent(){
    var calculate:number = 0;
    this.id = new Array<number>(0);
    for(var i = 0;i < this.selectedCar.length;i++){
       calculate += this.selectedCar[i].cost_per_day;
       this.id.push(parseInt(this.selectedCar[i].id));
       console.log(this.id);
    }
    this.router.navigate(['/calculate-rental-cars'], { queryParams: {token: this.Token,carsSelected:calculate,Id:this.id}} );
  }

  removeFromList(){

  
    this.selectedCar.splice(0,this.selectedCar.length);
    this.http.get("http://localhost:59775/api/Rental/GetCarsAvailable",{headers:{
      'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get',
      'Authorization':'Basic ' + this.Token
    }}).subscribe((c:Array<any>) =>{
      this.cars = c;
      this.counterId = new Array<number>(this.cars.length);
      for(var i = 0;i < this.counterId.length;i++){
        this.counterId[i] = i;
      }
        });
    
  
   
  }

  addToList(id){
   
    console.log(id);
      this.selectedCar.push(id);
      
      for(var i = 0;i < this.cars.length;i++){
        if(this.cars[i].car_number == id.car_number){
          this.cars.splice(i,1);
        }
      }

     
  }

  constructor(private http:HttpClient, private route: ActivatedRoute,private router:Router) { }

  searchText:string = '';

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/home-page']);
  }

  GetCars(){
    this.http.get("http://localhost:59775/api/Rental/GetCarsAvailable",{headers:{
      'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get',
      'Authorization':'Basic ' + this.Token
    }}).subscribe((c:Array<any>) =>{
      this.cars = c;
      this.counterId = new Array<number>(this.cars.length);
      for(var i = 0;i < this.counterId.length;i++){
        this.counterId[i] = i;
      }
        });
  
  }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.Token = params.token;

      this.GetCars();
    });
  }

}
