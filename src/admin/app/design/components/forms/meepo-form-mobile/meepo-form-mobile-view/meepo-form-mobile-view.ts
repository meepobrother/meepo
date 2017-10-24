import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormMobile } from '../../../../classes';
@Component({
    selector: 'meepo-form-mobile-view',
    templateUrl: './meepo-form-mobile-view.html',
    styleUrls: ['./meepo-form-mobile-view.scss']
})
export class MeepoFormMobileView implements OnInit {
    @Input() widget: MeepoFormMobile = new MeepoFormMobile();
    constructor() { }

    ngOnInit() { }

    getCode(){}
}