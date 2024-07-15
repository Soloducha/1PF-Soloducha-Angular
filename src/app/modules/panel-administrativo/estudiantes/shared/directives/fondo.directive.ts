import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[fondo]'
})
export class FondoDirective implements OnInit {
  @Input() fondo: string = 'transparent'; // Color por defecto

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.fondo);
  }
}
