import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';
import {MatAnchor, MatButton} from '@angular/material/button';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatDrawerContainer, MatDrawer, MatButton, RouterOutlet, RouterLink, MatAnchor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) {}

  navigateToTask(): void {
    this.router.navigate(['/task']);
  }


}
