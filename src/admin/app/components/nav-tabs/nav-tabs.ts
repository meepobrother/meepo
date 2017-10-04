import { Component, OnInit, ContentChildren, AfterContentInit, QueryList, Input } from '@angular/core';
import { NavTabPane, NavTabPaneRef } from './nav-tab-pane/nav-tab-pane';
@Component({
    selector: 'nav-tabs',
    templateUrl: './nav-tabs.html',
    styleUrls: ['./nav-tabs.scss'],
    providers: []
})
export class NavTabs implements OnInit, AfterContentInit {
    @ContentChildren(NavTabPane) panes: QueryList<NavTabPane>;
    @Input() title: string;
    activePane: NavTabPane;
    constructor() { }

    ngOnInit() { }

    ngAfterContentInit(){
        this.onClick(this.panes.first);
    }

    onClick(item: NavTabPane){
        this.panes.map(res=>{
            res.unActive();
        })
        item.doActive();

        this.activePane = item;
    }
}

