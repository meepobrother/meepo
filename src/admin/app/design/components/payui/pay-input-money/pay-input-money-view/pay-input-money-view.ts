import { Component, OnInit, Input } from '@angular/core';
import { PayInputMoneyDefault } from '../../../../classes';
@Component({
    selector: 'pay-input-money-view',
    templateUrl: './pay-input-money-view.html',
    styleUrls: ['./pay-input-money-view.scss']
})
export class PayInputMoneyView implements OnInit {
    @Input() widget: PayInputMoneyDefault = new PayInputMoneyDefault();
    constructor( ) { }
    ngOnInit() { }
}
