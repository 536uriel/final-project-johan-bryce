import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup , FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl('',Validators.compose([Validators.required,Validators.minLength(3)])),
    pass: new FormControl('',Validators.compose([Validators.required,Validators.minLength(3)]))
  });

  constructor(private http:HttpClient,private router:Router) {

   }
 

Token1:any;

uspass:boolean = true;

  login(userName,password){
  

      this.http.post("http://localhost:59775/api/Rental/postLogin",{userName,password},{headers:{
        'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post'
      }}).subscribe(p => {
      
        this.Token1 = p;
        localStorage.setItem('token',this.Token1);
       
        this.router.navigate(['/user-page'], { queryParams: {token: this.Token1}} );
        
       this.uspass = true;
       console.log(p);
       
      },err =>{
        this.uspass = false;
      }
      
    );
    }
    
    

    
  
  

  ngOnInit() {
  }

}
