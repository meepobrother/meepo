import { Component, OnInit, Input } from '@angular/core';
import { TopicsListDefault } from '../../../../classes';
@Component({
    selector: 'topics-list-setting',
    templateUrl: './topics-list-setting.html',
    styleUrls: ['./topics-list-setting.scss']
})
export class TopicsListSetting implements OnInit {
    @Input() widget: TopicsListDefault = new TopicsListDefault();
    constructor() { }

    ngOnInit() { }
}