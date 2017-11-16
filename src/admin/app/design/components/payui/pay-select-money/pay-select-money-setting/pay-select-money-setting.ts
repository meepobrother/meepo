import { Component, OnInit, Input } from '@angular/core';
import { PaySelectMoneyDefault } from '../../../../classes';

@Component({
    selector: 'pay-select-money-setting',
    templateUrl: './pay-select-money-setting.html',
    styleUrls: ['./pay-select-money-setting.scss']
})
export class PaySelectMoneySetting implements OnInit {
    @Input() widget: PaySelectMoneyDefault = new PaySelectMoneyDefault();
    constructor() { }

    ngOnInit() { 
        this.widget['__do'] = this.widget['__do'] || 'tixian.post';
        this.widget['__post'] = this.widget['__post'] || "";
        this.widget['__success'] = this.widget['__success'] || "";
    }

    add() {
        let item = { title: '10元', money: '10' };
        this.widget.children.push(item);
    }
}