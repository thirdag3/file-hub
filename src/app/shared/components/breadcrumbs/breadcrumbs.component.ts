import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { Breadcrumb } from '../../services/breadcrumb.interface';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(bs: BreadcrumbService) {
    this.breadcrumbs$ = bs.breadcrumbs$;
  }
}
