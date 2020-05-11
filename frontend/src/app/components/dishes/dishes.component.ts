import { Component, OnInit } from '@angular/core';

import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  restaurant: any
  isRestaurant: boolean = false
  cart: Object[]

  constructor(private dataSharing: DataSharingService) { }

  ngOnInit(): void {
    this.dataSharing.sharedSelectedRestaurant
    .subscribe(data => {
      this.restaurant = data
      this.isRestaurant = true
      console.log(this.restaurant)
    })

    this.dataSharing.sharedCart
    .subscribe(cart => {
      this.cart = cart
    })
  }

  addDish(dish: Object) {
    // TODO - check if dish is already in cart
    
    this.cart.push(dish)
    this.dataSharing.sendCart(this.cart)
  }
}
