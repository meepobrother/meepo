import { Component, OnInit, Input } from '@angular/core';
import { CityItemDefault } from '../../../../classes';

@Component({
    selector: 'city-item-setting',
    templateUrl: './city-item-setting.html',
    styleUrls: ['./city-item-setting.scss']
})
export class CityItemSetting implements OnInit {
    @Input() widget: CityItemDefault = new CityItemDefault();
    constructor() { }

    ngOnInit() { }
}
