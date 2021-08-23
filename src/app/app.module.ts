import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes.routing';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { NgxGalleryModule } from 'ngx-gallery-9';

@NgModule({
  declarations: [			
    AppComponent,
      ValueComponent,
      NavComponent,
      CityComponent,
      CityDetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
