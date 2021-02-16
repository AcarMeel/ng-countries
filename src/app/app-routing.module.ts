import { SeeCountryComponent } from './country/pages/see-country/see-country.component';
import { CapitalComponent } from './country/pages/capital/capital.component';
import { RegionComponent } from './country/pages/region/region.component';
import { CountryComponent } from './country/pages/country/country.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CountryComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: RegionComponent,
  },
  {
    path: 'capital',
    component: CapitalComponent,
  },
  {
    path: 'country/:id',
    component: SeeCountryComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
