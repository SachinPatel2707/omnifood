import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  // keep track of location
  private location = new BehaviorSubject('delhi')
  sharedLocation = this.location.asObservable()

  // keep track of selected restaurant
  private selectedRestaurant = new BehaviorSubject<Object>({})
  sharedSelectedRestaurant = this.selectedRestaurant.asObservable()

  // keep track of items in cart
  private cart = new BehaviorSubject<Array<Object>>([
    {
      "id": 2,
      "name": "Odeon Restaurant",
      "dishName": "Shahi Paneer",
      "dishImage": "../../assets/img/4.jpg",
      "cost": 240,
      "suggestion": "Best with naan"
    },
    {
      "id": 3,
      "name": "Odeon Restaurant",
      "dishName": "Lachha Paratha",
      "dishImage": "../../assets/img/5.jpg",
      "cost": 80,
      "suggestion": "Best with Paneer Dishes"
    },
    {
      "id": 4,
      "name": "Odeon Restaurant",
      "dishName": "Chowmein",
      "dishImage": "../../assets/img/6.jpg",
      "cost": 180,
      "suggestion": ""
    }
  ])
  sharedCart = this.cart.asObservable()

  constructor() { }

  sendLocation(location: string) {
    this.location.next(location)
  }

  sendRestaurant(restaurant: Object) {
    this.selectedRestaurant.next(restaurant)
  }

  sendCart(cart: Object[]) {
    this.cart.next(cart)
    this.sharedCart.pipe(take(1)).subscribe(cart => console.log(cart))
  }
}
