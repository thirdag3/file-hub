import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ClickOutsideDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isProfileMenuOpen: boolean = false;

  toggleProfileMenuOpen(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  clickedOutside(): void {
    if (this.isProfileMenuOpen) {
      this.isProfileMenuOpen = false;
    }
  }
}
