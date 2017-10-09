import { Directive, OnInit, ElementRef } from '@angular/core';
import * as Sortable from 'sortablejs';
@Directive({
    selector: '[sortable]'
})
export class SortableDirective implements OnInit {

    constructor(
        public ele: ElementRef
    ) { }

    ngOnInit() {

    }
}
