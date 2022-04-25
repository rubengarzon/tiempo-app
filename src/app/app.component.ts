import { GeoLocationService } from './shared/services/geo-location.service';
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

  constructor(
    private readonly weatherService: WeatherService,
    private readonly geoLocationService: GeoLocationService
  ) {
    if (navigator?.geolocation) {
      this.getLocation();
    }
  }

  public onSearch(city: string): void {
    this.weather$ = this.weatherService.getWeatherByName(city);
  }

  private async getLocation(): Promise<void> {
    try {
      const { coords } = await this.geoLocationService.getCurrentPosition();
      this.weather$ = this.weatherService.getWeatherByCoords(coords);
    } catch (error) {
      console.log(error);
    }
  }
}
