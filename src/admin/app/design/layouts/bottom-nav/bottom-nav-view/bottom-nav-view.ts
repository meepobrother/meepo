import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'div.bottom-nav-view',
    templateUrl: './bottom-nav-view.html',
    styleUrls: ['./bottom-nav-view.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BottomNavView implements OnInit {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { }
}


export class BottomNavDefault {
    type: string = 'bottom-nav';
    footers: any[] = [];
    constructor(){

    }
}