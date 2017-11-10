import { Component, OnInit, Input } from '@angular/core';
import { MeepoTabbarDefault } from '../../../../classes';

@Component({
    selector: 'meepo-tabbar-setting',
    templateUrl: './meepo-tabbar-setting.html',
    styleUrls: ['./meepo-tabbar-setting.scss']
})
export class MeepoTabbarSetting implements OnInit {
    @Input() widget: MeepoTabbarDefault = new MeepoTabbarDefault();
    constructor() { }

    ngOnInit() { }
}

