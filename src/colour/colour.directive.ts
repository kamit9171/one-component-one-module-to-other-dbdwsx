import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[colour-directive]',
})
export class ColourDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
