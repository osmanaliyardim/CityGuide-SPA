import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient, private alertifyService:AlertifyService, private router:Router) { }

  path:string = "https://localhost:44391/api/Cities/";

  getCities():Observable<City[]>{
    return this.http.get<City[]>(this.path + "cities");
  }

  getCityById(cityId:number):Observable<City>{
    return this.http.get<City>(this.path + "detail?cityId=" + cityId);
  }

  getPhotosByCity(cityId:number):Observable<Photo[]>{
    return this.http.get<Photo[]>(this.path + "photos?cityId=" + cityId);
  }

  add(city){
    this.http.post(this.path + "add", city).subscribe(data => {
      this.alertifyService.success("Şehir başarıyla eklendi!");
      this.router.navigateByUrl('/cityDetail/' + data["id"]);
    });
  }

}
