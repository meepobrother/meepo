import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormAddressDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-address-setting',
    templateUrl: './meepo-form-address-setting.html',
    styleUrls: ['./meepo-form-address-setting.scss']
})
export class MeepoFormAddressSetting implements OnInit {
    @Input() widget: MeepoFormAddressDefault = new MeepoFormAddressDefault();
    
    constructor() { }

    ngOnInit() { }
}