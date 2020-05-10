import { Component, OnInit } from '@angular/core';

import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  restaurant: Object
  cart: Object[]

  constructor(private dataSharing: DataSharingService) { }

  ngOnInit(): void {
    this.dataSharing.sharedSelectedRestaurant
    .subscribe(data => {
      this.restaurant = data
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
