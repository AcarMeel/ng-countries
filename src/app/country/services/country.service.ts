import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/countries.interface';

@Injectable({providedIn: 'root'})
export class CountryService {
    private readonly API_URL = 'https://restcountries.eu/rest/v2';
    public params = new HttpParams()
    .set('fields', 'name;capital;alpha2Code;flag;population');
    constructor(
        private http: HttpClient
    ) { }

    public searchCountry(country: string): Observable<CountryResponse[]> {
        return this.http.get<CountryResponse[]>(`${this.API_URL}/name/${country}`,{ params: this.params });
    }

    public searchCountryByCapital(capital: string): Observable<CountryResponse[]> {
        return this.http.get<CountryResponse[]>(`${this.API_URL}/capital/${capital}`, { params: this.params });
    }

    public searchCountryByAlphaCode(alpha: string): Observable<CountryResponse> {
        return this.http.get<CountryResponse>(`${this.API_URL}/alpha/${alpha}`);
    }

    public searchCountryByRegion(region: string): Observable<CountryResponse[]> {
        return this.http.get<CountryResponse[]>(`${this.API_URL}/region/${region}`, { params: this.params });
    }
    
}