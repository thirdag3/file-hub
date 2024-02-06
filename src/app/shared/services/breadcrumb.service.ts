import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Breadcrumb } from './breadcrumb.interface';
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private readonly breadcrumbs = new BehaviorSubject<Breadcrumb[]>([]);

  breadcrumbs$ = this.breadcrumbs.asObservable();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      const root = this.router.routerState.snapshot.root; 
      const breadcrumbs: Breadcrumb[] = []; 
      this.addBreadcrumb(root, [], breadcrumbs); 

      this.breadcrumbs.next(breadcrumbs); 
    });
  }

  private addBreadcrumb(route: ActivatedRouteSnapshot, parentUrl: string[], breadcrumbs: Breadcrumb[]): void {
    if (route) {  
      const routeUrl = parentUrl.concat(route.url.map(url => url.path)); 
 
      if (route.data['breadcrumb']) { 
        const breadcrumb = {
          url: '/' + routeUrl.join('/'),
          label: this.getLabel(route.data),
          isCurrent: route.firstChild === null
        };
        breadcrumbs.push(breadcrumb); 
      }
 
      this.addBreadcrumb(route.firstChild!, routeUrl, breadcrumbs); 
    } 
  }

  private getLabel(data: Data): any { 
    const breadcrumb = data['breadcrumb'];
    return typeof breadcrumb === 'function' ? breadcrumb(data) : breadcrumb; 
  } 
}
