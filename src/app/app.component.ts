import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'omnifood';
  activeTab = 'home';
  navbar: boolean = false
  
  constructor(private router: Router) {}

  toggleNavBar() {
    if(this.navbar) {
      this.navbar = false
    } else {
      this.navbar = true
    }

  }
}
