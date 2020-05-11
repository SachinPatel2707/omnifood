import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataSharingService } from '../../services/data-sharing.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

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
    this.data.getRestaurantsByLocation(this.location)
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
