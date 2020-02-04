import {Directive, ElementRef, Renderer2, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appCardOnHover]'
})
export class CardOnHoverDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
  }


  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1.1)', );
    this.renderer.setStyle(this.elementRef.nativeElement, 'z-index', '1000');
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1.0)');
    this.renderer.setStyle(this.elementRef.nativeElement, 'z-index', 'auto');
  }

}
