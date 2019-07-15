import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  imageSrc:any;
  mail = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required]);
  hide = true;

  getErrorMessage(type:string) {
    if(type == "email"){
    return this.mail.hasError('required') ? 'You must enter a value' :
        this.mail.hasError('email') ? 'Not a valid email' : '';

          }
          if(type == "password"){
            return this.mail.hasError('required') ? 'You must enter a value' :'';
                  }

  }

  constructor(private http:HttpClient,private router:Router) { }

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
     
        const reader = new FileReader();
        reader.readAsDataURL(file);
   
        reader.onload = (e) => {this.imageSrc = reader.result;}
    
  
    }
}


  registerNewUser(fullName:string,Id:number,
    userName:string,password,BDate,gender:string,email){

    var img =  this.imageSrc;
    
   

  var date = BDate;
   
     

     if(fullName && Id && userName && password && gender && email){
       this.http.post("http://localhost:59775/api/Rental/NewUser",{fullName,Id,
      userName,password,date,gender,email,img},{headers:{
        'Content-Type':'application/json;charest=utf-8','Access-Control-Allow-Method':'Post'
      }}).subscribe(p => {
        this.router.navigate(['/login']);
        
      });
     }

  }

  ngOnInit() {
  }

}
