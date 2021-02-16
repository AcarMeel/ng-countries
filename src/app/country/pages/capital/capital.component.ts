import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../../interfaces/countries.interface';
import { CountryService } from './../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent implements OnInit {
  public searchTerm = '';
  public isError = false;
  public countries: CountryResponse[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  public search(searchTerm: string): void {
    this.isError = false;
    this.searchTerm = searchTerm;
    this.countryService.searchCountryByCapital(this.searchTerm).subscribe(
      (res: CountryResponse[]) => {
        this.countries = res;
      },
      (err: HttpErrorResponse) => {
        console.error(err.error);
        this.isError = true;
        this.countries = [];
      }
    );
  }

  public suggestions(searchTerm: string): void {}

}
