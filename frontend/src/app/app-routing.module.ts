import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

const routes: Routes = [
  { path: 'login', component:  LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
