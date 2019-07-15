import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manneger-login',
  templateUrl: './manneger-login.component.html',
  styleUrls: ['./manneger-login.component.css']
})
export class MannegerLoginComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  Token:any;
  muspass:boolean = true;
 
  login(userName,password){
    this.http.post("http://localhost:59775/api/Rental/loginManneger",{userName,password},{headers:{
     'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post'}})
     .subscribe(t => {
       this.Token = t;
       this.muspass = true;
       localStorage.setItem('token',this.Token);
       this.router.navigate(['/manneger-page'], { queryParams: {token: this.Token}} );
     },err =>{
       this.muspass = false;
     });
    }

  ngOnInit() {
  }

}
