import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormFeeDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-fee-setting',
    templateUrl: './meepo-form-fee-setting.html',
    styleUrls: ['./meepo-form-fee-setting.scss']
})
export class MeepoFormFeeSetting implements OnInit {
    @Input() widget: MeepoFormFeeDefault = new MeepoFormFeeDefault();
    constructor() { }

    ngOnInit() { }
}
