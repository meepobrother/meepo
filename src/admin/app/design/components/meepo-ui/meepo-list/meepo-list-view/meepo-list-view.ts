import { Component, OnInit, Input } from '@angular/core';
import { MeepoList } from '../../../../classes';
@Component({
    selector: 'meepo-list-view',
    templateUrl: './meepo-list-view.html',
    styleUrls: ['./meepo-list-view.scss']
})
export class MeepoListView implements OnInit {
    @Input() widget: MeepoList = new MeepoList();
    constructor() { }

    ngOnInit() { }
}
