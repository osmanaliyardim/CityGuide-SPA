import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { ValueComponent } from './value/value.component';

export const routes: Routes = [
  { path:"", redirectTo:"city", pathMatch:"full" }, //pathMatch boş olduğundan emin olmak için
  { path:"city", component:CityComponent },
  { path:"value", component:ValueComponent }
];