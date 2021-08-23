import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

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
    this.http.post(this.path + "add", city).subscribe();
  }

}
