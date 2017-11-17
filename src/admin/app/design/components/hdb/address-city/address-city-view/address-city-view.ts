import { Component, OnInit, Input } from '@angular/core';
import { AddressCityDefault } from '../../../../classes';

@Component({
    selector: 'address-city-view',
    templateUrl: './address-city-view.html',
    styleUrls: ['./address-city-view.scss']
})
export class AddressCityView implements OnInit {
    @Input() widget: AddressCityDefault = new AddressCityDefault();
    constructor() { }

    ngOnInit() { }
}
