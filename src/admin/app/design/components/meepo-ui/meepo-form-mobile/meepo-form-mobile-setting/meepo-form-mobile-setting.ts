import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormMobile } from '../../../../classes';

@Component({
    selector: 'meepo-form-mobile-setting',
    templateUrl: './meepo-form-mobile-setting.html',
    styleUrls: ['./meepo-form-mobile-setting.scss']
})
export class MeepoFormMobileSetting implements OnInit {
    @Input() widgegt: MeepoFormMobile = new MeepoFormMobile();
    constructor() { }

    ngOnInit() { }
}