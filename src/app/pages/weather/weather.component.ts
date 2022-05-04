import { tap } from 'rxjs';
import { WeatherService } from './services/weather.service';
import { Forecast } from './../../shared/interfaces/forecast.interfaces';
import { WeatherData } from './../../shared/interfaces/weather.interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  @Input() public weather!: WeatherData;
  @Input() public forecast!: Forecast;
  public fechaActual!: string;
  public BASE_URL = 'http://openweathermap.org/img/wn';
  faSun: IconDefinition = faSun;

  constructor() {
    var hoy = new Date();
    var fecha =
      hoy.getFullYear() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getDate();

    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    var fechaYHora =
      hoy.toLocaleDateString('en-CA') + ' ' + hoy.toLocaleTimeString();
    this.fechaActual = fechaYHora;
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

  }
}
