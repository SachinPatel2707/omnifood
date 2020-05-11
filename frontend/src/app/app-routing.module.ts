import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { DonateComponent } from './components/donate/donate.component';
import { AdminComponent } from './components/admin/admin.component';
import { TestComponent } from './components/test/test.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { DishesComponent } from './components/dishes/dishes.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'donate', component: DonateComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'restaurants/:location', component: RestaurantsComponent},
  { path: 'dishes', component: DishesComponent },

  { path: 'test', component: TestComponent},
  { path: 'test/:location', component: TestComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
