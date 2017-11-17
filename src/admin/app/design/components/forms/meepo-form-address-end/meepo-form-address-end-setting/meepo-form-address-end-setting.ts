import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormAddressEndDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-address-end-setting',
    templateUrl: './meepo-form-address-end-setting.html',
    styleUrls: ['./meepo-form-address-end-setting.scss']
})
export class MeepoFormAddressEndSetting implements OnInit {
    @Input() widget: MeepoFormAddressEndDefault = new MeepoFormAddressEndDefault();
    
    constructor() { }

    ngOnInit() { }
}
