import { Component, OnInit, Input } from '@angular/core';
import { UuItemBoxDefault } from '../../../../classes';

@Component({
    selector: 'uu-item-box-view',
    templateUrl: './uu-item-box-view.html',
    styleUrls: ['./uu-item-box-view.scss']
})
export class UuItemBoxView implements OnInit {
    @Input() widget: UuItemBoxDefault = new UuItemBoxDefault();
    
    constructor() { }

    ngOnInit() { }
}