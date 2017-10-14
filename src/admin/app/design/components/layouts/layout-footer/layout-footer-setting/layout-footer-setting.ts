import { Component, OnInit, Input } from '@angular/core';
import { LayoutFooter } from '../layout-footer';
@Component({
    selector: 'layout-footer-setting',
    templateUrl: './layout-footer-setting.html',
    styleUrls: ['./layout-footer-setting.scss']
})
export class LayoutFooterSetting implements OnInit {
    @Input() widget: LayoutFooter = new LayoutFooter();
    constructor() { }

    ngOnInit() { 
        this.widget.children = this.widget.children || [];
        console.log(this.widget);
    }

    addItem(){
        this.widget.children.push({
            title: '标题',
            icon: 'fa fa-plus-square'
        });
    }

    onChange(){
        console.log(this.widget);        
    }

    deleteItem(item: any){
        const index = this.widget.children.indexOf(item);
        this.widget.children.splice(index,1);
    }

    linkItem(item: any){}

    selectIcon(item: any){

    }
}