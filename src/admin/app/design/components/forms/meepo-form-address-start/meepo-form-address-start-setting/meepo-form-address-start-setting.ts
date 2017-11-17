import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormAddressStartDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-address-start-setting',
    templateUrl: './meepo-form-address-start-setting.html',
    styleUrls: ['./meepo-form-address-start-setting.scss']
})
export class MeepoFormAddressStartSetting implements OnInit {
    @Input() widget: MeepoFormAddressStartDefault = new MeepoFormAddressStartDefault();
    constructor() { }
    ngOnInit() { }
}
