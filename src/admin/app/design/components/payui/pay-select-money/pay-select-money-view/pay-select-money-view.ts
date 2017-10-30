import { Component, OnInit, Input } from '@angular/core';
import { PaySelectMoneyDefault } from '../../../../classes';

@Component({
    selector: 'pay-select-money-view',
    templateUrl: './pay-select-money-view.html',
    styleUrls: ['./pay-select-money-view.scss']
})
export class PaySelectMoneyView implements OnInit {
    @Input() widget: PaySelectMoneyDefault = new PaySelectMoneyDefault();
    constructor() { }

    ngOnInit() { }
}