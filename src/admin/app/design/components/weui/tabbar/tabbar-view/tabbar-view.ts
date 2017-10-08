import { Component, OnInit, Input } from '@angular/core';
import { Tabbar } from '../tabbar';
@Component({
    selector: 'tabbar-view',
    templateUrl: './tabbar-view.html',
    styleUrls: ['./tabbar-view.scss']
})
export class TabbarView implements OnInit {
    @Input() widget: Tabbar = new Tabbar();
    constructor() { }

    ngOnInit() { }
}

