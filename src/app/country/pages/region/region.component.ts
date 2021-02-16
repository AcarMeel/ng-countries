import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    
  ]
})
export class RegionComponent implements OnInit {
  public regions = Array(
    'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
  );
  public activeRegion = '';
  public countries: CountryResponse[] = [];
  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
  }

  public searchByRegion(region: string): void {
    this.activeRegion = region;
    this.countryService.searchCountryByRegion(region)
    .subscribe(res => {
      this.countries = res;
    }, err => {
      this.countries = [];
    })
  }

}
