import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataSharingService } from './services/data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'omnifood'
  isLoggedIn: boolean
  navbar: boolean = false
  location: string
  
  constructor(private router: Router, private dataSharing: DataSharingService) {
  }

  ngOnInit() {
    this.dataSharing.sharedLocation
    .subscribe(location => {
      this.location = location
      // console.log(location)
    })

    this.dataSharing.sharedIsLoggedIn
    .subscribe(data => this.isLoggedIn = data)
  }

  toggleNavBar() {
    if(this.navbar) {
      this.navbar = false
    } else {
      this.navbar = true
    }
  }
}