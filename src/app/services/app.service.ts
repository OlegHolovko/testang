import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  linkToApi: string = 'http://api.weatherapi.com/v1/forecast.json?key=81b5e3a9fbd041a587975853231104&days=3&aqi=no&alerts=no&q=';
  linkToApi2: string = 'http://vps-cfaeb561.vps.ovh.net:8080/'; ; //'http://3.19.246.115:8080/'

  constructor(private http: HttpClient) { }

  getData(city: string): Observable<Response> {
    return this.http.get<Response>(this.linkToApi+city);
  }

  getData2(city: string): Observable<City> {
    return this.http.get<City>(this.linkToApi2);
  }

}
