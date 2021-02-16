import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {
  @Input() inputLabel = 'Country Name';
  @Input() inputPlaceholder = 'Search Country';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  public searchTerm = '';
  public debouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  public search(): void {
    this.onEnter.emit(this.searchTerm);
  }

  public onKeyPressed(): void {
    this.debouncer.next(this.searchTerm);
  }

}
