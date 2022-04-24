import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { WeatherData } from '@app/shared/interfaces/weather.interfaces';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly API_URL = environment.openWeather.url;

  constructor(private readonly http: HttpClient) {}

  public getWeatherByName(city: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', environment.openWeather.key)
      .set('lang', 'es');
    return this.http.get<WeatherData>(`${this.API_URL}/weather`, {
      params,
    });
  }
  //public getWeatherByCoords(): Observable<WeatherData> {}
}
