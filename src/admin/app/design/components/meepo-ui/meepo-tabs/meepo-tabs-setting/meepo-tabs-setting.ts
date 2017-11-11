import { Component, OnInit, Input } from '@angular/core';
import { MeepoTabsDefault } from '../../../../classes';

@Component({
    selector: 'meepo-tabs-setting',
    templateUrl: './meepo-tabs-setting.html',
    styleUrls: ['./meepo-tabs-setting.scss']
})
export class MeepoTabsSetting implements OnInit {
    @Input() widget: MeepoTabsDefault = new MeepoTabsDefault();
    constructor() { }

    ngOnInit() { }
}
