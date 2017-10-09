import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LayoutMenu } from '../layout-menu';
@Component({
    selector: 'layout-menu-view',
    templateUrl: './layout-menu-view.html',
    styleUrls: ['./layout-menu-view.scss']
})
export class LayoutMenuView implements OnInit, OnChanges {
    @Input() widget: LayoutMenu = new LayoutMenu();
    constructor() { }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('LayoutMenuView', changes);
    }
}