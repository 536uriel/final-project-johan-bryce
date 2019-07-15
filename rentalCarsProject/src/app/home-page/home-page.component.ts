import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cars:any;

  constructor(private http:HttpClient) { }

  GetCars(){
    this.http.get("http://localhost:59775/api/Rental/GetCarsForEveryone",{headers:{
      'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get'
    }}).subscribe((c:Array<any>) =>{
      this.cars = c;
    
        });
  
  }

  ngOnInit() {
     this.GetCars();
  }

}
