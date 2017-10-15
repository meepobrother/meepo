import { Component, OnInit, Input } from '@angular/core';
import { Tabbar } from '../../../../classes';
@Component({
    selector: 'tabbar-setting',
    templateUrl: './tabbar-setting.html',
    styleUrls: ['./tabbar-setting.scss']
})
export class TabbarSetting implements OnInit {
    @Input() widget: Tabbar = new Tabbar();
    constructor() { }

    ngOnInit() { }

    addItem(){
        this.widget.content.push({
            icon: 'assets/images/icon_tabbar.png',
            title: '测试'
        });
    }

    delete(index: number){
        this.widget.content.splice(index,1);
    }
}