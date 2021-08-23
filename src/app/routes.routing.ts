import { Routes, RouterModule } from '@angular/router';
import { CityAddComponent } from './city/city-add/city-add.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { CityComponent } from './city/city.component';
import { ValueComponent } from './value/value.component';

export const routes: Routes = [
  { path:"", redirectTo:"city", pathMatch:"full" }, //pathMatch boş olduğundan emin olmak için
  { path:"city", component:CityComponent },
  { path:"cityDetail/:cityId", component:CityDetailComponent },
  { path:"cityAdd", component:CityAddComponent },
  { path:"value", component:ValueComponent }
];