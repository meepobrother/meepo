import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HmBoxDefault } from '../../../../classes';
@Component({
    selector: 'hm-box-view',
    templateUrl: './hm-box-view.html',
    styleUrls: ['./hm-box-view.scss']
})
export class HmBoxView implements OnInit {
    @Input() widget: HmBoxDefault = new HmBoxDefault();
    constructor() { }
    ngOnInit() { }
}
