import { CountryResponse } from './../../interfaces/countries.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-country-table',
    templateUrl: 'country-table.component.html'
})

export class CountryTableComponent implements OnInit {
    @Input() countries: CountryResponse[] = [];
    constructor() { }

    ngOnInit() { }
}