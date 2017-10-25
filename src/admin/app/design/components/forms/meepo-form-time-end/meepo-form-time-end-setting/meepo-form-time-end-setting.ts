import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormTimeEndDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-time-end-setting',
    templateUrl: './meepo-form-time-end-setting.html',
    styleUrls: ['./meepo-form-time-end-setting.scss']
})
export class MeepoFormTimeEndSetting implements OnInit {
    @Input() widget: MeepoFormTimeEndDefault = new MeepoFormTimeEndDefault();
    constructor() { }

    ngOnInit() { }
}
