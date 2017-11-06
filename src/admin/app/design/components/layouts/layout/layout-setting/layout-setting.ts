import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'layout-setting',
    templateUrl: './layout-setting.html',
    styleUrls: ['./layout-setting.scss']
})
export class LayoutSetting implements OnInit {
    @Input() widget: any;

    types: any[] = [];
    constructor() { 
        this.types = [
            {
                title: '详情页面',
                code: 'detail'
            }
        ];
    }

    ngOnInit() { }
}