import { Component, OnInit, Input } from '@angular/core';
import { JdHomeOrderDefault } from '../../../../classes';

@Component({
    selector: 'jd-home-order-setting',
    templateUrl: './jd-home-order-setting.html',
    styleUrls: ['./jd-home-order-setting.scss']
})
export class JdHomeOrderSetting implements OnInit {
    @Input() widget: JdHomeOrderDefault = new JdHomeOrderDefault();
    constructor() { }

    ngOnInit() { }
}
