import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
Token:any;
user:{userName: '', password: ''};
userName: '';
imgSrc:string = '';
order:any;

logOut(){
  localStorage.removeItem('token');
   this.router.navigate(['/home-page']);
}

getUserOrder(){
   this.http.get("http://localhost:59775/api/Rental/getUserOrder",{headers:{
     'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get',
     'Authorization':'Basic ' + localStorage.getItem('token')
   }}).subscribe(o =>{
     this.order = o;
  
   });
 }

GetPerson(){
  this.http.get("http://localhost:59775/api/Rental/getPerson",{headers:{
    'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Get',
    'Authorization':'Basic ' + this.Token
  }}).subscribe(p =>{
    this.userName = p['userName'];
    this.imgSrc = p['img'];
  });

}

goToCarsRent(){
  this.router.navigate(['/cars-to-rent'], { queryParams: {token: this.Token}} );
}

  constructor(private http:HttpClient,private router:Router, private route: ActivatedRoute , private auth:AuthService) {

   }

   ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.Token = params.token;
    
      this.getUserOrder();
      this.GetPerson();
    });

  }

}
