import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected_fruit = 'Banana';
  title = 'testang';

  constructor(private appService: AppService) {}
  
  onChange(value: any) {
      this.selected_fruit = value.target.value;
      		// API Call

		this.appService.getData().
      subscribe( {
        next: (item) => console.log(
          item.location.country+"/"
          +item.location.name+"/"
          +item.forecast.forecastday[0].date+"/"
          +item.forecast.forecastday[0].day.maxtemp_c
        ),
        error: (err) => console.log('err: ', err)
      }); 
  }
}
