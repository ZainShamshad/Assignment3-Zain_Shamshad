import {Directive,ElementRef,Input,OnChanges,OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
    selector:'[activeItem]'
})

export class ActiveItemDirective implements OnInit,OnChanges{

    public isActive:boolean = false;

    @Input('isActive') set setActive(active:boolean){
        this.isActive = active;
    }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ){

    }
    ngOnChanges(changes: SimpleChanges): void {
        if(this.isActive){
            this.renderer.setStyle(this.elementRef.nativeElement,'font-size','smaller');
            this.renderer.setStyle(this.elementRef.nativeElement,'font-style','blod');
            this.renderer.setStyle(this.elementRef.nativeElement,'color','green');
        }
    }

    ngOnInit(): void {
    }
}
