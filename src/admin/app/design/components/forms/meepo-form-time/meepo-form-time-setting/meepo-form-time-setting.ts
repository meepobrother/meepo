import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormTimeDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-time-setting',
    templateUrl: './meepo-form-time-setting.html',
    styleUrls: ['./meepo-form-time-setting.scss']
})
export class MeepoFormTimeSetting implements OnInit {
    @Input() widget: MeepoFormTimeDefault = new MeepoFormTimeDefault();
    constructor() { }

    ngOnInit() { }
}
