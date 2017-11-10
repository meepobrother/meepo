
import { Directive, OnInit, HostListener, Renderer2, ElementRef, Input } from '@angular/core';
import { DragDropService } from './drag-drop.service';
@Directive({
    selector: '[dropable]'
})
export class DropableDirective implements OnInit {

    @Input() dragenterClass: string = 'meepo-dragenter';
    constructor(
        public ele: ElementRef,
        public rd: Renderer2,
        public service: DragDropService
    ) { }

    @HostListener('dragenter', ['$event'])
    dragstart(evt: Event) {
        if (this.ele.nativeElement === evt.target) {
            this.rd.addClass(this.ele.nativeElement, this.dragenterClass);
        }
    }

    @HostListener('dragover', ['$event'])
    dragover(evt: Event) {
        if (this.ele.nativeElement === evt.target) {
            this.rd.addClass(this.ele.nativeElement, this.dragenterClass);
        }
    }

    @HostListener('dragleave', ['$event'])
    dragleave(evt: Event) {
        if (this.ele.nativeElement === evt.target) {
            this.rd.removeClass(this.ele.nativeElement, this.dragenterClass);
        }
    }

    @HostListener('drop', ['$event'])
    drop(evt: Event) {
        if (this.ele.nativeElement === evt.target) {
            this.rd.removeClass(this.ele.nativeElement, this.dragenterClass);
        }
    }

    ngOnInit() {
        this.rd.setAttribute(this.ele.nativeElement, 'draggable', `true`);
    }

}