import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataSharingService } from '../../services/data-sharing.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  location: string
  restaurants: any = []

  constructor(private router: Router, private route: ActivatedRoute, private dataSharing: DataSharingService, private data: DataService) { }

  ngOnInit(): void {
    this.dataSharing.sharedLocation
    .subscribe(location => {
      this.location = location
      this.location = this.location.charAt(0).toUpperCase() + this.location.substr(1).toLowerCase()
      this.fetchRestaurants()
    })
  }

  fetchRestaurants(): void {
    this.data.getRestaurants()
    .subscribe(data => {
      console.log(data)
      this.restaurants = data
    })
  }

  selectRestaurant(restaurant: Object): void {
    this.dataSharing.sendRestaurant(restaurant)
    this.router.navigate(['/dishes'])
  }
}
