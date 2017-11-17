import { Component, OnInit, Input } from '@angular/core';
import { pageTypes } from '../../../../../meepo/db/pageTypes';
@Component({
    selector: 'layout-setting',
    templateUrl: './layout-setting.html',
    styleUrls: ['./layout-setting.scss']
})
export class LayoutSetting implements OnInit {
    @Input() widget: any;
    types: any[] = pageTypes;
    constructor() { }
    ngOnInit() { 
        console.log(this.widget);
    }
}