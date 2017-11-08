import { Component, OnInit, Input } from '@angular/core';
import { JdHomeMoneyDefault } from '../../../../classes';
import * as store from 'store';

@Component({
    selector: 'jd-home-money-view',
    templateUrl: './jd-home-money-view.html',
    styleUrls: ['./jd-home-money-view.scss']
})
export class JdHomeMoneyView implements OnInit {
    @Input() widget: JdHomeMoneyDefault = new JdHomeMoneyDefault();
    constructor() { }

    ngOnInit() { }
}
