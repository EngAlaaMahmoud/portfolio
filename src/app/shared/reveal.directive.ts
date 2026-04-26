import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2, inject, input, numberAttribute } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal-in'
  }
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  readonly appReveal = input(0, { transform: numberAttribute });

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;

    this.renderer.setStyle(element, 'transition-delay', `${this.appReveal()}ms`);

    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(element, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(element, 'is-visible');
          this.observer?.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -48px 0px'
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
