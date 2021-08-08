import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarfilterPipe } from './pipes/carfilter.pipe';
import { FormsModule } from '@angular/forms';
import { BrandfilterPipe } from './pipes/brandfilter.pipe';
import { ColorfilterPipe } from './pipes/colorfilter.pipe';
import { RentalfilterPipe } from './pipes/rentalfilter.pipe';
import { TestdateformatPipe } from './pipes/testdateformat.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    SidebarComponent,
    CarComponent,
    RentalComponent,
    CarDetailComponent,
    CarfilterPipe,
    BrandfilterPipe,
    ColorfilterPipe,
    RentalfilterPipe,
    TestdateformatPipe    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
registerLocaleData(localeTr, 'tr');
