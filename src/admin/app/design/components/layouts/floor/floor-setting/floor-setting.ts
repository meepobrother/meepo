import { Component, OnInit, Input, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { LayoutFloorDefault } from '../../../../classes';

@Component({
    selector: 'floor-setting',
    templateUrl: './floor-setting.html',
    styleUrls: ['./floor-setting.scss']
})
export class FloorSetting implements OnInit {
    @Input() widget: LayoutFloorDefault = new LayoutFloorDefault();
    constructor(
        public ele: ElementRef
    ) { }

    ngOnInit() { }
}
