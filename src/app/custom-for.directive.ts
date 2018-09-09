import {Directive, Input, TemplateRef, ViewContainerRef, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomFor]'
})
export class CustomForDirective {
  @Input() set appCustomFor(elements: any) {
    for( let element in elements) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef, private elementRef: ElementRef) { }

}
