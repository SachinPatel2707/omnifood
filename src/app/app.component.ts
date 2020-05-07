import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'omnifood';

  navbar: boolean = false
  
  toggleNavBar() {
    if(this.navbar) {
      this.navbar = false
    } else {
      this.navbar = true
    }
  }
}
