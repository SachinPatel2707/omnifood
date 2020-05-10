import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../services/data-sharing.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Object[]
  quantity: number[] = []
  cartEmpty: boolean = true

  // form group
  billingDetails = new FormGroup({
    name: new FormControl(''),
    contactNumber: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private dataSharing: DataSharingService, private router: Router) { }

  ngOnInit(): void {
    this.dataSharing.sharedCart
    .subscribe(cart => {
      this.cart = cart
      if(this.cart.length != 0) {
        this.cartEmpty = false
      } else {
        this.cartEmpty = true
      }
      if(this.quantity.length == 0) {
        cart.forEach(()=> this.quantity.push(1))
      }
    })
  }

  incQuantity(i: number): void {
    if(this.quantity[i] < 10) {
      this.quantity[i] += 1
    }
    // REMOVE
    console.log(this.quantity)
  }

  decQuantity(i: number): void {
    if(this.quantity[i] > 1) {
      this.quantity[i] -= 1
    }
    // REMOVE
    console.log(this.quantity)
  }

  removeDish(i: number) {
    this.cart.splice(i, 1)
    this.quantity.splice(i, 1)
    this.dataSharing.sendCart(this.cart)
    console.log(this.cart, this.quantity)    
  }

  onSubmit(form: FormGroup): void {
    console.log(`Order Summary: \nName: ${form.value.name} \nContact Number: ${form.value.contactNumber} \nAddress: ${form.value.address} \nDishes Ordered: ${this.cart}`)

    setTimeout(()=> {
      this.router.navigate(['/home'])
    }, 2000)
  }
}
