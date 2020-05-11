import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private router: Router, private dataSharing: DataSharingService) { }

  location: string

  ngOnInit(): void {
    this.dataSharing.sharedLocation
    .subscribe(location => this.location = location)
  }

  goToRestaurants(location: string) {
    if(this.validateLocation(location)) {
      this.dataSharing.sendLocation(location)
      this.router.navigate(['/restaurants', location])
    }
  }

  validateLocation(location: string): boolean {
    location = location.toUpperCase()
    const validLocations = ["DELHI", "NOIDA", "GHAZIABAD", "GURUGRAM"]

    for(let i = 0; i < validLocations.length; i++) {
      if(location.localeCompare(validLocations[i]) == 0) {
        return true
      }
    }
  }
}
