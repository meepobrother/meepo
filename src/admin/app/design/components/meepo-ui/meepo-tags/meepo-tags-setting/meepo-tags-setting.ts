import { Component, OnInit, Input } from '@angular/core';
import { MeepoTags } from '../../../../classes';

@Component({
    selector: 'meepo-tags-setting',
    templateUrl: './meepo-tags-setting.html',
    styleUrls: ['./meepo-tags-setting.scss']
})
export class MeepoTagsSetting implements OnInit {
    @Input() widget: MeepoTags = new MeepoTags();
    constructor() { }

    ngOnInit() { }

    addTags(){
        let tag = {
            title: '标签'
        };
        this.widget.children.push(tag);
    }
}

