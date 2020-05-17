import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataSharingService } from '../../services/data-sharing.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  selectedRestaurant: any
  cart: any[]
  quantities: number[] = []
  subtotal: number = 0
  isCartEmpty: boolean = true
  displayFeedbackForm: boolean = false
  registerForm: FormGroup;
  submitted: boolean = false

  constructor(private data: DataService, private dataSharing: DataSharingService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataSharing.sharedSelectedRestaurant
    .subscribe(data => this.selectedRestaurant = data)

    this.dataSharing.sharedCart
    .subscribe(data => {
      this.cart = data
      if(this.cart.length != 0) {
        this.isCartEmpty = false
      } else {
        this.isCartEmpty = true
      }

      if(this.quantities.length == 0) {
        data.forEach(()=> this.quantities.push(0))
      }
    })

    this.registerForm = this.formBuilder.group({
      name: ['' ,Validators.required],
      comments: ['' ,Validators.required],
      rating: ['', [Validators.min(1), Validators.max(10)]]
    });
  }

  addOrRemoveFromCart(dish: any) {
    
    for(let i = 0; i < this.cart.length; i++) {
      if(this.cart[i].dishName === dish.dishName) {
        this.subtotal -= (dish.cost * this.quantities[i])
        this.cart.splice(i, 1)
        this.quantities.splice(i, 1)
        dish.isAdded = false
        this.dataSharing.sendCart(this.cart)
        return
        // console.log(this.cart)
      }
    }

    this.cart.push(dish)
    this.quantities.push(0)
    dish.isAdded = true
    this.dataSharing.sendCart(this.cart)
    
    // REMOVE
    console.log(this.cart)
  }

  incQuantity(cost: number, i: number): void {
    if(this.quantities[i] < 10) {
      this.quantities[i] += 1
      this.subtotal += cost
    }
    // REMOVE
    console.log(this.quantities)
  }

  decQuantity(cost:number, i: number): void {
    if(this.quantities[i] > 1) {
      this.quantities[i] -= 1
      this.subtotal -= cost
    }
    // REMOVE
    console.log(this.quantities)
  }

  checkOut() {

    console.log(this.quantities)

    for(let i = 0; i < this.quantities.length; i++) {
      if(this.quantities[i] == 0) {
        alert('Cart cannot have items with 0 quantity')
        return
      }
    }
    // push the subtotal to the end of quantities and publish it
    this.quantities.push(this.subtotal)
    this.dataSharing.sendQuantities(this.quantities)
    this.router.navigate(['/checkout'])
  }

  toggleFeedbackForm() {
    this.displayFeedbackForm = !this.displayFeedbackForm
  }

  onSubmit(form: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    } 

    let formData = {
      "name": form.value.name,
      "comments": form.value.comments,
      "rating": form.value.rating
    }

    // console.log(formData)

    this.data.postFeedback(formData)

    form.reset()
    this.submitted = false
    this.toggleFeedbackForm()

    alert('Your feedback was received successfully')
  }
}
