import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormPriceDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-price-setting',
    templateUrl: './meepo-form-price-setting.html',
    styleUrls: ['./meepo-form-price-setting.scss']
})
export class MeepoFormPriceSetting implements OnInit {
    @Input() widget: MeepoFormPriceDefault = new MeepoFormPriceDefault();
    constructor() { }

    ngOnInit() { }
}
