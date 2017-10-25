import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormOrderDefault } from '../../../../classes';
@Component({
    selector: 'meepo-form-order-setting',
    templateUrl: './meepo-form-order-setting.html',
    styleUrls: ['./meepo-form-order-setting.scss']
})
export class MeepoFormOrderSetting implements OnInit {
    @Input() widget: MeepoFormOrderDefault = new MeepoFormOrderDefault();
    constructor() { }

    ngOnInit() { }
}