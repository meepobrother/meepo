import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'layout-footer-setting',
    templateUrl: './layout-footer-setting.html',
    styleUrls: ['./layout-footer-setting.scss']
})
export class LayoutFooterSetting implements OnInit {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { 
        this.widget.children = this.widget.children || [];
        this.widget['activeStyle'] = this.widget['activeStyle'] || {color: '#ff0000'};
        this.widget['containerStyle'] = this.widget['containerStyle'] || {color: '#fff', 'background-color': '#19b394'};
    }

    addItem(){
        this.widget.children.push({
            title: '标题',
            icon: 'fa fa-plus-square'
        });
    }

    deleteItem(item: any){
        const index = this.widget.children.indexOf(item);
        this.widget.children.splice(index,1);
    }

    linkItem(item: any){}

    selectIcon(item: any){

    }
}