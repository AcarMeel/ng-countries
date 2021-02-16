import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/countries.interface';

@Injectable({providedIn: 'root'})
export class CountryService {
    private readonly API_URL = 'https://restcountries.eu/rest/v2';

    constructor(
        private http: HttpClient
    ) { }

    public searchCountry(country: string): Observable<CountryResponse[]> {
        return this.http.get<CountryResponse[]>(`${this.API_URL}/name/${country}`);
    }

    public searchCountryByCapital(capital: string): Observable<CountryResponse[]> {
        return this.http.get<CountryResponse[]>(`${this.API_URL}/capital/${capital}`);
    }
    
}