import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'layout-header-setting',
    templateUrl: './layout-header-setting.html',
    styleUrls: ['./layout-header-setting.scss']
})
export class LayoutHeaderSetting implements OnInit {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { 

    }

    change(){
        console.log(this.widget);
    }

}