import { Component, OnInit, Input } from '@angular/core';
import { PayStateDefault } from '../../../../classes';

@Component({
    selector: 'pay-state-setting',
    templateUrl: './pay-state-setting.html',
    styleUrls: ['./pay-state-setting.scss']
})
export class PayStateSetting implements OnInit {
    @Input() widget: PayStateDefault = new PayStateDefault();
    constructor() { }

    ngOnInit() { }
}