import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';
import { Subscription, filter, fromEvent } from 'rxjs';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {

  @Output() clickedOutside = new EventEmitter<void>();

  private clickEventSubscription?: Subscription;

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document) {
  }

  ngAfterViewInit(): void {
    this.clickEventSubscription = fromEvent(this.document, "click")
      .pipe(
        filter(e => {
          return !this.isElementInside(e.target as HTMLElement);
        })
      )
      .subscribe(() => {
        this.clickedOutside.emit();
      });
  }

  ngOnDestroy(): void {
    this.clickEventSubscription?.unsubscribe();
  }

  private isElementInside(other: HTMLElement): boolean {
    return other === this.element.nativeElement
      || this.element.nativeElement.contains(other);
  }
}
