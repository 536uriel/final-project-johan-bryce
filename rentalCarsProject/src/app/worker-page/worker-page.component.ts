import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-worker-page',
  templateUrl: './worker-page.component.html',
  styleUrls: ['./worker-page.component.css']
})
export class WorkerPageComponent implements OnInit {

  Token:any;
  avilableCars:any;

  logOut(){
    localStorage.removeItem('token');
     this.router.navigate(['/home-page']);
  }

  returnCar(car){
    this.http.post("http://localhost:59775/api/Rental/returnCar",car,{headers:{
      'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get',
      'Authorization':'Basic ' + this.Token
    }}).subscribe( r =>{
      this.avilableCars = r;
    })
  }
  
GetCars(){
  this.http.get("http://localhost:59775/api/Rental/getCars",{headers:{
    'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get',
    'Authorization':'Basic ' + this.Token
  }}).subscribe(p =>{
      this.avilableCars = p;
  });

}

  constructor(private http:HttpClient,private router:Router, private route: ActivatedRoute) { }

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
