import { Component, OnInit, Input, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { LayoutFloorDefault } from '../../../../classes';

@Component({
    selector: 'floor-view',
    templateUrl: './floor-view.html',
    styleUrls: ['./floor-view.scss']
})
export class FloorView implements OnInit {
    @Input() widget: LayoutFloorDefault = new LayoutFloorDefault();
    constructor(
        public ele: ElementRef
    ) { }

    ngOnInit() { }
}
