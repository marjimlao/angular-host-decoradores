import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appUnclickable]'
})
export class UnclickableDirective {

  @HostBinding('style.top') top = '0px';
  @HostBinding('style.left') left = '0px';

  @HostListener('mouseenter') move() {

    const randomTop = Math.random() > 0.5 ? 1 : -1;
    const randomLeft = Math.random() > 0.5 ? 1 : -1;

    const top = +this.top.substring(0, this.top.length - 2);
    const left = +this.left.substring(0, this.left.length - 2);

    this.top = (top - 200) < 0 ? top + 200 + 'px' : (top + 200 === 600 ? top - 200 : top + (randomTop * 200)) + 'px';
    this.left = (left - 200) < 0 ? left + 200 + 'px' : (left + 200 === 600 ? left - 200 : left + (randomLeft * 200)) + 'px';
  }

  constructor() { }
}
