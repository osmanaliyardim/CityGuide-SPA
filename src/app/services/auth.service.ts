import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginUser } from '../models/LoginUser';
import { RegisterUser } from '../models/registerUser';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path:string = "https://localhost:44391/api/auth/";
  userToken:any;
  decodedToken:any;
  jwtHelper:JwtHelperService = new JwtHelperService();
  TOKEN_KEY:string = "token";

  constructor(private http:HttpClient, private router:Router, private alertifyService:AlertifyService) { }

  login(loginUser:LoginUser){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");

    this.http.post(this.path + "login", loginUser, {headers:headers})
    .subscribe(data => {
      this.saveToken(data.toString());
      this.userToken = data;
      this.decodedToken = this.jwtHelper.decodeToken(data.toString());
      this.alertifyService.success("Sisteme başarıyla giriş yaptınız!");

      this.router.navigateByUrl('/city');
    });
  }

  register(registerUser:RegisterUser){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");

    this.http.post(this.path + "register", registerUser, {headers:headers})
    .subscribe(data => {
      
    });
  }

  saveToken(token:string){
    localStorage.setItem(this.TOKEN_KEY, token)
  }

  logOut(){
    localStorage.removeItem(this.TOKEN_KEY);
    this.alertifyService.warning("Sistemden çıkış yaptınız!");
  }

  loggedIn(){
    return this.jwtHelper.isTokenExpired(this.TOKEN_KEY);
  }

  get token(){
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUserID(){
    return this.jwtHelper.decodeToken(this.token).nameid;
  }
}
