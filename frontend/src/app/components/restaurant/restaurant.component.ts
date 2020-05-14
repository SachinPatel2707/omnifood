import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataSharingService } from '../../services/data-sharing.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  selectedRestaurant: any

  constructor(private data: DataService, private dataSharing: DataSharingService, private router: Router) { }

  ngOnInit(): void {
    this.dataSharing.sharedSelectedRestaurant
    .subscribe(data => this.selectedRestaurant = data)
  }

}
