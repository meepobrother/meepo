import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormAddressEndDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-address-end-view',
    templateUrl: './meepo-form-address-end-view.html',
    styleUrls: ['./meepo-form-address-end-view.scss']
})
export class MeepoFormAddressEndView implements OnInit {
    @Input() widget: MeepoFormAddressEndDefault = new MeepoFormAddressEndDefault();
    constructor() { }
    ngOnInit() { }

    selectAddress(){}
}
