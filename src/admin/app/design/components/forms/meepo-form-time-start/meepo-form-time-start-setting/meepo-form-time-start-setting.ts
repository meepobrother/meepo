import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormTimeStartDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-time-start-setting',
    templateUrl: './meepo-form-time-start-setting.html',
    styleUrls: ['./meepo-form-time-start-setting.scss']
})
export class MeepoFormTimeStartSetting implements OnInit {
    @Input() widget: MeepoFormTimeStartDefault = new MeepoFormTimeStartDefault();
    constructor() { }

    ngOnInit() { }
}
