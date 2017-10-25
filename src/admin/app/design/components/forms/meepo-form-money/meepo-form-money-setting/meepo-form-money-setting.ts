import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormMoneyDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-money-setting',
    templateUrl: './meepo-form-money-setting.html',
    styleUrls: ['./meepo-form-money-setting.scss']
})
export class MeepoFormMoneySetting implements OnInit {
    @Input() widget: MeepoFormMoneyDefault = new MeepoFormMoneyDefault();
    constructor() { }

    ngOnInit() { }
}
