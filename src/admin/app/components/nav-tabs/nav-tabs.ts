import { Component, OnInit, ContentChildren, AfterContentInit, QueryList, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { NavTabPane, NavTabPaneRef } from './nav-tab-pane/nav-tab-pane';

export function isTrueProperty(val: any): boolean {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === 'on' || val === '');
    }
    return !!val;
}

@Component({
    selector: 'nav-tabs',
    templateUrl: './nav-tabs.html',
    styleUrls: ['./nav-tabs.scss'],
    providers: []
})
export class NavTabs implements OnInit, AfterContentInit {
    @ContentChildren(NavTabPane) panes: QueryList<NavTabPane>;
    @Input() title: string;
    @Input() activePane: NavTabPane;

    @Output() onInit: EventEmitter<any> = new EventEmitter();

    @HostBinding('class') _class: string = 'tabs-container';

    _isTabs: boolean = true;
    @Input()
    set isTabs(val: boolean) {
        this._isTabs = isTrueProperty(val);
    }

    @Input()
    set left(val: boolean) {
        if (isTrueProperty(val)) {
            this._class = 'tabs-left';
        }
    }

    @Input()
    set right(val: boolean) {
        if (isTrueProperty(val)) {
            this._class = 'tabs-right';
        }
    }


    constructor() { }

    ngOnInit() {
        this.onInit.emit(this);
    }

    ngAfterContentInit() {
        this.onClick(this.panes.first);
    }

    onClick(item: NavTabPane) {

        this.panes.map(res => {
            res.unActive();
        });
        if (item) {
            item.doActive && item.doActive();
        }
        this.activePane = item;
    }
}

