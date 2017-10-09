import { Component, OnInit, Input, OnChanges, SimpleChanges, HostListener } from '@angular/core';
import { LayoutMenu } from '../layout-menu';
import { LayoutService } from '../../layout.service';

@Component({
    selector: 'layout-menu-view',
    templateUrl: './layout-menu-view.html',
    styleUrls: ['./layout-menu-view.scss']
})
export class LayoutMenuView implements OnInit, OnChanges {
    @Input() widget: LayoutMenu = new LayoutMenu();
    @HostListener('click', ['$event'])
    onClick(evt: any) {
        this.layout.onMenu(this.widget);
    }
    constructor(
        public layout: LayoutService
    ) { }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('LayoutMenuView', changes);
    }
}