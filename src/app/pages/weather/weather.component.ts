import { WeatherData } from './../../shared/interfaces/weather.interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  @Input() public weather!: WeatherData;
  public BASE_URL = 'http://openweathermap.org/img/wn';
}
