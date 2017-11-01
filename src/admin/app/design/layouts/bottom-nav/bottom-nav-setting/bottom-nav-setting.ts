import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'div.bottom-nav-setting',
    templateUrl: './bottom-nav-setting.html',
    styleUrls: ['./bottom-nav-setting.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BottomNavSetting implements OnInit {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { }
}


class BottomNavDefault {
    type: string = 'bottom-nav';
    footers: any[] = [];
    constructor(){

    }
}