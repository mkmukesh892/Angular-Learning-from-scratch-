import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightedColor: string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
   // this.renderer.setStyle(this.elemRef.nativeElement,'background-color', 'green', false, false);
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
      this.backgroundColor = this.highlightedColor;
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');
  }
}
