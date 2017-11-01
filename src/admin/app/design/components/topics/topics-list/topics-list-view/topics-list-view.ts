import { Component, OnInit, Input } from '@angular/core';
import { TopicsListDefault } from '../../../../classes';

@Component({
    selector: 'topics-list-view',
    templateUrl: './topics-list-view.html',
    styleUrls: ['./topics-list-view.scss']
})
export class TopicsListView implements OnInit {
    @Input() widget: TopicsListDefault = new TopicsListDefault();

    list: any[] = [];
    constructor() { }

    ngOnInit() { }
}
