import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataSharingService } from '../../services/data-sharing.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted = false;

  shelters = [
    {
      "name": "The Albright Shelter",
      "location": "Delhi",
      "contact": "9833712993",
      "image": "../../../assets/img/shelter-1.jpg"
    },
    {
      "name": "State Homeless Shelter",
      "location": "Delhi",
      "contact": "9833432993",
      "image": "../../../assets/img/shelter-2.jpg"
    }
  ]

  constructor(private data: DataService, private dataSharing: DataSharingService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      helper: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      description: [''],
      contact: ['', [Validators.required, Validators.min(6000000000), Validators.max(10000000000)]],
      image: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(form: any) {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      } 

      let formData = {
        "helper": form.value.helper,
        "location": form.value.location,
        "description": form.value.description,
        "contact": form.value.contact.toString(),
        "email": form.value.email,
        "image": form.value.image
      }

      console.log(formData)

      this.data.postDonation(formData)

      form.reset()
      this.submitted = false

      alert('Your request was received successfully, we will schedule a pickup soon.')

  }

}
