
import { Directive, OnInit, HostListener, Renderer2, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { DragDropService } from './drag-drop.service';
import 'rxjs/add/operator/take';
@Directive({
    selector: '[dropable]'
})
export class DropableDirective implements OnInit {

    @Input() dragenterClass: string = 'sortable-active';
    @Input() dropTags: string[] = [];

    @Output() onDrop: EventEmitter<any> = new EventEmitter();

    private data$;
    constructor(
        public ele: ElementRef,
        public rd: Renderer2,
        public service: DragDropService
    ) { 
        this.data$ = this.service.getDragData().take(1);
    }

    @HostListener('dragenter', ['$event'])
    dragstart(evt: Event) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.ele.nativeElement === evt.target) {
            this.data$.subscribe(dragData=>{
                if(this.dropTags.indexOf(dragData.tag) > -1){
                    this.rd.addClass(this.ele.nativeElement, this.dragenterClass);
                }
            });
        }
    }

    @HostListener('dragover', ['$event'])
    dragover(evt: Event) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.ele.nativeElement === evt.target) {
            this.data$.subscribe(dragData=>{
                if(this.dropTags.indexOf(dragData.tag) > -1){
                    this.rd.setProperty(evt,'dataTransfer.effectAllowed','all');
                    this.rd.setProperty(evt,'dataTransfer.dropEffect','move');
                }else{
                    this.rd.setProperty(evt,'dataTransfer.effectAllowed','none');
                    this.rd.setProperty(evt,'dataTransfer.dropEffect','none');
                }
            });
        }
    }

    @HostListener('dragleave', ['$event'])
    dragleave(evt: Event) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.ele.nativeElement === evt.target) {
            this.data$.subscribe(dragData=>{
                if(this.dropTags.indexOf(dragData.tag) > -1){
                    this.rd.removeClass(this.ele.nativeElement, this.dragenterClass);
                }
            });
        }
    }

    @HostListener('drop', ['$event'])
    drop(evt: Event) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.ele.nativeElement === evt.target) {
            this.data$.subscribe(dragData=>{
                if(this.dropTags.indexOf(dragData.tag) > -1){
                    this.rd.removeClass(this.ele.nativeElement, this.dragenterClass);
                    this.onDrop.next(dragData);
                    this.service.clearDragData();
                    console.log('放到这里',this.ele.nativeElement);
                }
            });
        }
    }

    ngOnInit() {
        this.rd.setAttribute(this.ele.nativeElement, 'draggable', `true`);
    }

}