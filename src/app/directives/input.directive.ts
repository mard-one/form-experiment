import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[inputDirective]'
})
export class InputDirective implements OnChanges {

  @Input() inputDirective;

  constructor() {
    console.log('directive init');
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('changes in directive', change);
  }

}
