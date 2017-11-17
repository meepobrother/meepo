import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HmHomeTopDefault } from '../../../../classes';
@Component({
    selector: 'hm-home-top-setting',
    templateUrl: './hm-home-top-setting.html',
    styleUrls: ['./hm-home-top-setting.scss']
})
export class HmHomeTopSetting implements OnInit {
    @Input() widget: HmHomeTopDefault = new HmHomeTopDefault();
    constructor() { }
    ngOnInit() { }

    addRight(){
        let right = {
            title: '标题',
            num: '0',
            link: ''
        };
        this.widget.rights.push(right);
    }

    addItem(){
        let item = {
            title: '标题',
            link: '',
            icon: 'fa fa-edit'
        };
        this.widget.items.push(item);
    }
}
