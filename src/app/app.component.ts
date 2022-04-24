import { WeatherService } from './pages/weather/services/weather.service';
import { WeatherData } from '@shared/interfaces/weather.interfaces';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public weather$!: Observable<WeatherData>;

  constructor(private readonly weatherService: WeatherService) {}

  public onSearch(city: string): void {
    this.weather$ = this.weatherService.getWeatherByName(city);
  }
}
