import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {
@Input ('textDecoration') textDecoration;
  constructor(private elm: ElementRef) {
  }
  @HostListener('mouseenter', ['$event.target']) onMouseOver() {
    this.textMe(this.textDecoration);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.textDecoration === 'underline') {
    this.elm.nativeElement.style.textDecoration = 'none';
    } else {
      this.elm.nativeElement.style.fontWeight = 'normal';
    }
  }

  textMe(t): void {
    if (t === 'underline') {
    this.elm.nativeElement.style.textDecoration = 'underline';
    } else {
    this.elm.nativeElement.style.fontWeight = 'bold';
    }
}
}
