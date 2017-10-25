import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormWeightDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-weight-setting',
    templateUrl: './meepo-form-weight-setting.html',
    styleUrls: ['./meepo-form-weight-setting.scss']
})
export class MeepoFormWeightSetting implements OnInit {
    @Input() widget: MeepoFormWeightDefault = new MeepoFormWeightDefault();
    constructor() { }

    ngOnInit() { }
}
