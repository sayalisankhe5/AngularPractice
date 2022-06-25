import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  constructor(private element:ElementRef , private renderer:Renderer2) {
    console.log(this.element);

   }
   ngOnInit(): void {
    console.log(this.element);
    //this.element.nativeElement.style.backgroundColor="yellow";
    //this.element.nativeElement.style.color="green";
    this.renderer.setStyle(this.element,"backgroundColor","blue");
   }

}
