import { Component, OnInit, Input } from '@angular/core';
import { JdHomeOrderDefault } from '../../../../classes';

@Component({
    selector: 'jd-home-order-view',
    templateUrl: './jd-home-order-view.html',
    styleUrls: ['./jd-home-order-view.scss']
})
export class JdHomeOrderView implements OnInit {
    @Input() widget: JdHomeOrderDefault = new JdHomeOrderDefault();
    constructor() { }

    ngOnInit() { }

    myorder(){}
}
