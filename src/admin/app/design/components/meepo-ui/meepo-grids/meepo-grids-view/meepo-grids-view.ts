import { Component, OnInit, Input } from '@angular/core';
import { MeepoGridsDefault } from '../../../../classes';
@Component({
    selector: 'meepo-grids-view',
    templateUrl: './meepo-grids-view.html',
    styleUrls: ['./meepo-grids-view.scss']
})
export class MeepoGridsView implements OnInit {
    @Input() widget: MeepoGridsDefault = new MeepoGridsDefault();
    constructor() { }

    ngOnInit() { }
}

