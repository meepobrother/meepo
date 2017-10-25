import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormTagDefault } from '../../../../classes';
@Component({
    selector: 'meepo-form-tag-view',
    templateUrl: './meepo-form-tag-view.html',
    styleUrls: ['./meepo-form-tag-view.scss']
})
export class MeepoFormTagView implements OnInit {
    @Input() widget: MeepoFormTagDefault = new MeepoFormTagDefault();
    constructor() { }

    ngOnInit() { }

    select(item: any) {
        this.widget.children.map(res => {
            res.active = false
        });
        item.active = true;
    }
}

