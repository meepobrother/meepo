import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormAddressDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-address-view',
    templateUrl: './meepo-form-address-view.html',
    styleUrls: ['./meepo-form-address-view.scss']
})
export class MeepoFormAddressView implements OnInit {
    @Input() widget: MeepoFormAddressDefault = new MeepoFormAddressDefault();
    constructor() { }

    ngOnInit() { }
}