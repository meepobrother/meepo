import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'scroll-view-setting',
    templateUrl: './scroll-view-setting.html',
    styleUrls: ['./scroll-view-setting.scss']
})
export class ScrollViewSetting implements OnInit {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { }
}
