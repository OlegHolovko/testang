import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  linkToApi: string = 'http://api.weatherapi.com/v1/forecast.json?key=81b5e3a9fbd041a587975853231104&q=Edmonton&days=3&aqi=no&alerts=no';

  constructor(private http: HttpClient) { }

  getData(): Observable<Response> {
    return this.http.get<Response>(this.linkToApi);
  }

}
