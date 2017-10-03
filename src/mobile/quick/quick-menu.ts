import { Component, OnInit, Input, ContentChild, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { NgForOfContext } from '@angular/common';
import { QuickItemOutlet } from './quick-item-outlet';

@Component({
    selector: 'quick-menu',
    templateUrl: 'quick-menu.html',
    styleUrls: ['quick-menu.css'],
    encapsulation: ViewEncapsulation.None
})
export class QuickMenu implements AfterContentInit {
    @Input() items: any[] = [];
    @ContentChild(QuickItemOutlet) outlet: QuickItemOutlet;
    constructor() { }

    ngAfterContentInit() {
        console.log(this.outlet);
    }
}

