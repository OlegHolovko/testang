import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected_city= 'Edmonton';

  constructor(private appService: AppService) {}
  
  onChange(value: any) {
    this.selected_city = value.target.value;

		this.appService.getData(value.target.value).
      subscribe( {
        next: (item) => console.log(
          item.location.country+"/"
          +item.location.name+"/"
          +item.forecast.forecastday[0].date+"/"
          +item.forecast.forecastday[0].day.maxtemp_c
        ),
        error: (err) => console.log('err: ', err)
      }); 


      this.appService.getData2(value.target.value).
      subscribe( {
        next: (item2) => console.log("Spring:"+
          item2.name
        ),
        error: (err) => console.log('err: ', err)
      }); 
  }
}
