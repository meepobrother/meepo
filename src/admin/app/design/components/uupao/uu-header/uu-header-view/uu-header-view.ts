import { Component, OnInit, Input } from '@angular/core';
import { UuHeaderDefault } from '../../../../classes';

@Component({
    selector: 'uu-header-view',
    templateUrl: './uu-header-view.html',
    styleUrls: ['./uu-header-view.scss']
})
export class UuHeaderView implements OnInit {
    @Input() widget: UuHeaderDefault = new UuHeaderDefault();
    constructor() { }

    ngOnInit() { }
}