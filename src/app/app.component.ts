import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BreadcrumbsComponent } from "./shared/components/breadcrumbs/breadcrumbs.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, BreadcrumbsComponent]
})
export class AppComponent {
  title = 'FileHub';
}
