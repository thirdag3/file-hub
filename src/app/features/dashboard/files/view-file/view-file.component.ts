import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-view-file',
    standalone: true,
    templateUrl: './view-file.component.html',
    styleUrl: './view-file.component.scss',
    imports: []
})
export class ViewFileComponent implements OnInit, OnDestroy {
  private routeSubscription?: Subscription;

  fileName: string = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(p => {
      const fileName = p["fileName"];
      this.fileName = fileName;
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }
}
