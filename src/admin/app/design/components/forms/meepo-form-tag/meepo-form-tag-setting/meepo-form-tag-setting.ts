import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormTagDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-tag-setting',
    templateUrl: './meepo-form-tag-setting.html',
    styleUrls: ['./meepo-form-tag-setting.scss']
})
export class MeepoFormTagSetting implements OnInit {
    @Input() widget: MeepoFormTagDefault = new MeepoFormTagDefault();
    constructor() { }

    ngOnInit() { }

    addTags(){
        let tag = {
            title: '标签'
        };
        this.widget.children.push(tag);
    }
}

