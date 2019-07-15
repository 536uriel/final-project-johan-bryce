import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-login',
  templateUrl: './worker-login.component.html',
  styleUrls: ['./worker-login.component.css']
})
export class WorkerLoginComponent implements OnInit {

  Token:any;
  wuspass:boolean = true;

  login(userName,password){
     this.http.post("http://localhost:59775/api/Rental/loginWorker",{userName,password},{headers:{
      'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post'}})
      .subscribe(t => {
        this.Token = t;
        this.wuspass = true;
        localStorage.setItem('token',this.Token);
        this.router.navigate(['/worker-page'], { queryParams: {token: this.Token}} );
      },err =>{

        this.wuspass = false;
      });
  }

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }

}
