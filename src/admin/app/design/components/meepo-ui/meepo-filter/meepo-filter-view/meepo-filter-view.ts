import { Component, OnInit, Input } from '@angular/core';
import { MeepoFilter } from '../../../../classes';
@Component({
    selector: 'meepo-filter-view',
    templateUrl: './meepo-filter-view.html',
    styleUrls: ['./meepo-filter-view.scss']
})
export class MeepoFilterView implements OnInit {
    @Input() widget: MeepoFilter = new MeepoFilter();
    constructor() { }

    ngOnInit() { }
}

