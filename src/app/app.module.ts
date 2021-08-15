import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarfilterPipe } from './pipes/carfilter.pipe';
import { BrandfilterPipe } from './pipes/brandfilter.pipe';
import { ColorfilterPipe } from './pipes/colorfilter.pipe';
import { RentalfilterPipe } from './pipes/rentalfilter.pipe';
import { TestdateformatPipe } from './pipes/testdateformat.pipe';
import { FilteredcarComponent } from './components/filteredcar/filteredcar.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

import { ToastrModule } from 'ngx-toastr';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ManagementcrudComponent } from './components/managementcrud/managementcrud.component';
import { GetidwithsharpPipe } from './pipes/getidwithsharp.pipe';
import { GetidwithcharPipe } from './pipes/getidwithchar.pipe';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TestforgithubComponent } from './components/testforgithub/testforgithub.component';
import { CalcPricePipe } from './pipes/calc-price.pipe';
import { CartComponent } from './components/cart/cart.component';
import { TermsComponent } from './components/terms/terms.component';
import { StoriesComponent } from './components/stories/stories.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';

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
    TestdateformatPipe,
    FilteredcarComponent,
    CartSummaryComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    ManagementcrudComponent,
    GetidwithsharpPipe,
    GetidwithcharPipe,
    LoginComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    RegisterComponent,
    NotfoundComponent,
    TestforgithubComponent,
    CalcPricePipe,
    CartComponent,
    TermsComponent,
    StoriesComponent,
    VatAddedPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right",
      progressBar:true,
    }
    ),
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
registerLocaleData(localeTr, 'tr');
