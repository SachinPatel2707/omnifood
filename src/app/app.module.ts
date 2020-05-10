import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { DonateComponent } from './components/donate/donate.component';
import { AdminComponent } from './components/admin/admin.component';
import { TestComponent } from './components/test/test.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { DishesComponent } from './components/dishes/dishes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    DonateComponent,
    AdminComponent,
    TestComponent,
    RestaurantsComponent,
    DishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
