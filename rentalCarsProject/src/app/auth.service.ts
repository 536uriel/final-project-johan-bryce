import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn():boolean{
     return !!localStorage.getItem('token');
    
  }

 

  constructor(private http:HttpClient) { }
}
