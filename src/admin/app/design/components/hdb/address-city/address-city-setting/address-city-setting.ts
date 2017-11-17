import { Component, OnInit, Input } from '@angular/core';
import { AddressCityDefault } from '../../../../classes';

@Component({
    selector: 'address-city-setting',
    templateUrl: './address-city-setting.html',
    styleUrls: ['./address-city-setting.scss']
})
export class AddressCitySetting implements OnInit {
    @Input() widget: AddressCityDefault = new AddressCityDefault();
    constructor() { }

    ngOnInit() { }
}
