import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './response';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Response> {
    //return this.http.get<Response>('http://api.weatherapi.com/v1/current.json?key=81b5e3a9fbd041a587975853231104&q=Edmonton&aqi=no');
    return this.http.get<Response>('http://api.weatherapi.com/v1/forecast.json?key=81b5e3a9fbd041a587975853231104&q=Edmonton&days=3&aqi=no&alerts=no');
  }

}
