import { Component, OnInit, Input } from '@angular/core';
import { ZanQuantityDefault } from '../../../../classes';

@Component({
    selector: 'zan-quantity-setting',
    templateUrl: './zan-quantity-setting.html',
    styleUrls: ['./zan-quantity-setting.scss']
})
export class ZanQuantitySetting implements OnInit {
    @Input() widget: ZanQuantityDefault = new ZanQuantityDefault();
    constructor() { }

    ngOnInit() { }
}