import { Component, OnInit, Input } from '@angular/core';
import { ActiveListDefault } from '../../../../classes';

@Component({
    selector: 'active-list-view',
    templateUrl: './active-list-view.html',
    styleUrls: ['./active-list-view.scss']
})
export class ActiveListView implements OnInit {
    @Input() widget: ActiveListDefault = new ActiveListDefault();
    constructor() { }

    ngOnInit() { }
}