import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormBaojiaDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-baojia-setting',
    templateUrl: './meepo-form-baojia-setting.html',
    styleUrls: ['./meepo-form-baojia-setting.scss']
})
export class MeepoFormBaojiaSetting implements OnInit {
    @Input() widget: MeepoFormBaojiaDefault = new MeepoFormBaojiaDefault();
    constructor() { }

    ngOnInit() { }

    addTags(){
        let tag = {
            title: '标签',
            price: '',
            value: ''
        };
        this.widget.children.push(tag);
    }
}

