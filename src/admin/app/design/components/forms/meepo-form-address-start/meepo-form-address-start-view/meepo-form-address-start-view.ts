import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormAddressStartDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-address-start-view',
    templateUrl: './meepo-form-address-start-view.html',
    styleUrls: ['./meepo-form-address-start-view.scss']
})
export class MeepoFormAddressStartView implements OnInit {
    @Input() widget: MeepoFormAddressStartDefault = new MeepoFormAddressStartDefault();
    
    constructor() { }
    ngOnInit() { }
}
