import { Component, OnInit, Input } from '@angular/core';
import { JdHomeMoneyDefault } from '../../../../classes';

@Component({
    selector: 'jd-home-money-setting',
    templateUrl: './jd-home-money-setting.html',
    styleUrls: ['./jd-home-money-setting.scss']
})
export class JdHomeMoneySetting implements OnInit {
    @Input() widget: JdHomeMoneyDefault = new JdHomeMoneyDefault();
    constructor() { }

    ngOnInit() { }

}
