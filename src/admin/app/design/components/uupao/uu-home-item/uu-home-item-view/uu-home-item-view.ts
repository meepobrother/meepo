import { Component, OnInit, Input } from '@angular/core';
import { UuHomeItemDefault } from '../../../../classes';
@Component({
    selector: 'uu-home-item-view',
    templateUrl: './uu-home-item-view.html',
    styleUrls: ['./uu-home-item-view.scss']
})
export class UuHomeItemView implements OnInit {
    @Input() widget: UuHomeItemDefault = new UuHomeItemDefault()
    constructor() { }

    ngOnInit() { }
}