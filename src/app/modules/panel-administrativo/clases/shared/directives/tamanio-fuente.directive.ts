import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTamanioFuente]'
})
export class TamanioFuenteDirective implements OnInit {
  @Input() appTamanioFuente: string = '16px';  // Valor por defecto

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', this.appTamanioFuente);
  }
}