import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type="text"][numbersOnly]',
})
export class NumbersOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const numericValue = value.replace(/[^0-9]/g, '');
    input.value = numericValue;
  }
}
