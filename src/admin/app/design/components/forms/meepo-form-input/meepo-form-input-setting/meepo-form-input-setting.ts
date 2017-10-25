import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormInputDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-input-setting',
    templateUrl: './meepo-form-input-setting.html',
    styleUrls: ['./meepo-form-input-setting.scss']
})
export class MeepoFormInputSetting implements OnInit {
    @Input() widget: MeepoFormInputDefault = new MeepoFormInputDefault();
    constructor() { }

    ngOnInit() { }
}
