import { TermsComponent } from './components/terms/terms.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ManagementcrudComponent } from './components/managementcrud/managementcrud.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { LoginGuard } from './components/guards/login.guard';
import { RegisterGuard } from './components/guards/register.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/carDetail/:carId", component:CarDetailComponent},
  {path:"rentals", component:RentalComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cars/add", component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"management", component:ManagementcrudComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent,canActivate:[RegisterGuard]},
  {path:"about-us", component:AboutComponent},
  {path:"blog", component:BlogComponent},
  {path:"terms", component:TermsComponent},
  {path:"register", component:RegisterComponent,canActivate:[RegisterGuard]},
  {path:"cart", component:CartComponent,canActivate:[LoginGuard]},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'},

  







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
