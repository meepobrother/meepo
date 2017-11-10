import { Directive, OnInit, HostListener, Renderer2, ElementRef, Input } from '@angular/core';
import { DragDropService } from './drag-drop.service';
@Directive({
    selector: 'div.ui-draggable,[draggable]'
})
export class DraggableDirective implements OnInit {

    @Input() draggedclass: string = 'meepo-dragged';
    @Input() dragTag: string;
    @Input() dragData: any;

    constructor(
        public ele: ElementRef,
        public rd: Renderer2,
        public service: DragDropService
    ) { }

    @HostListener('dragstart', ['$event'])
    dragstart(evt: Event) {
        if (this.ele.nativeElement === evt.target) {
            this.rd.addClass(this.ele.nativeElement, this.draggedclass);
            this.service.setDragData({ tag: this.dragTag, data: this.dragData });
        }
    }

    @HostListener('dragend', ['$event'])
    dragend(evt: Event) {
        if (this.ele.nativeElement === evt.target) {
            this.rd.removeClass(this.ele.nativeElement, this.draggedclass);
        }
    }

    ngOnInit() {
        this.rd.setAttribute(this.ele.nativeElement, 'draggable', `true`);
    }

}