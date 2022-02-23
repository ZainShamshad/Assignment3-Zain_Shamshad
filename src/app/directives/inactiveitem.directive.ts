import {Directive,ElementRef,Input,OnChanges,OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
    selector:'[inactiveItem]'
})

export class InActiveItemDirective implements OnInit,OnChanges{

    public isInactive:boolean = false;

    @Input('isInactive') set setInactive(inactive:boolean){
        this.isInactive = inactive;
    }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ){

    }
    ngOnChanges(changes: SimpleChanges): void {
        if(this.isInactive){
            this.renderer.setStyle(this.elementRef.nativeElement,'font-size','normal');
            this.renderer.setStyle(this.elementRef.nativeElement,'font-style','bolder');
            this.renderer.setStyle(this.elementRef.nativeElement,'color','white');
        }
    }

    ngOnInit(): void {
    }
}
