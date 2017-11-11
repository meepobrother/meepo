import { Component, OnInit, Input } from '@angular/core';
import { PayInputMoneyDefault } from '../../../../classes';
@Component({
    selector: 'pay-input-money-setting',
    templateUrl: './pay-input-money-setting.html',
    styleUrls: ['./pay-input-money-setting.scss']
})
export class PayInputMoneySetting implements OnInit {
    @Input() widget: PayInputMoneyDefault = new PayInputMoneyDefault();
    constructor( ) { }
    ngOnInit() { }
}
