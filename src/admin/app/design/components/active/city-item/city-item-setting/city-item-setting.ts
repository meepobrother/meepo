import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CityItemDefault } from '../../../../classes';

@Component({
    selector: 'city-item-setting',
    templateUrl: './city-item-setting.html',
    styleUrls: ['./city-item-setting.scss']
})
export class CityItemSetting implements OnInit, OnDestroy {
    @Input() widget: CityItemDefault = new CityItemDefault();
    constructor() { }

    ngOnInit() { }

    ngOnDestroy(){
        this.widget = null;
    }
}
