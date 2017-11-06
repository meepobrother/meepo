import { Component, OnInit, Input } from '@angular/core';
import { MeepoGridsDefault } from '../../../../classes';
@Component({
    selector: 'meepo-grids-setting',
    templateUrl: './meepo-grids-setting.html',
    styleUrls: ['./meepo-grids-setting.scss']
})
export class MeepoGridsSetting implements OnInit {
    @Input() widget: MeepoGridsDefault = new MeepoGridsDefault();
    constructor() { }

    ngOnInit() { }
}

