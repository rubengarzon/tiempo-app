import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  iif,
  map,
  mergeMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-search',
  template: `
    <div class="search">
      <input
        class="search__input"
        type="text"
        placeholder="Ciudad..."
        [formControl]="inputSearch"
      />
    </div>
  `,
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  inputSearch = new FormControl('');
  @Output() submitted = new EventEmitter<string>();

  ngOnInit(): void {
    this.onChange();
  }

  private onChange(): void {
    this.inputSearch.valueChanges
      .pipe(
        map((search: string) => search.trim()),
        debounceTime(1100),
        distinctUntilChanged(),
        filter((search: string) => search !== ''),
        tap((search: string) => this.submitted.emit(search)),
        filter((search: string) => search == 'cordoba'),
        tap((search: string) => this.submitted.emit('cordoba,es'))
      )
      .subscribe();
  }
}
