import { Component, OnInit, Input } from '@angular/core';
import { MeepoTags } from '../../../../classes';
@Component({
    selector: 'meepo-tags-view',
    templateUrl: './meepo-tags-view.html',
    styleUrls: ['./meepo-tags-view.scss']
})
export class MeepoTagsView implements OnInit {
    @Input() widget: MeepoTags = new MeepoTags();
    constructor() { }

    ngOnInit() { }

    select(item: any) {
        this.widget.children.map(res => {
            res.active = false
        });
        item.active = true;
    }
}

