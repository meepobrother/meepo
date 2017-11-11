import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MeepoTabsDefault } from '../../../../classes';

@Component({
    selector: 'meepo-tabs-view',
    templateUrl: './meepo-tabs-view.html',
    styleUrls: ['./meepo-tabs-view.scss']
})
export class MeepoTabsView implements OnInit {
    @Input() widget: MeepoTabsDefault = new MeepoTabsDefault();
    @ViewChild('panel') panel: ElementRef;
    width: number;
    constructor() { }

    ngOnInit() { 
        this.width = this.panel.nativeElement.clientWidth / 4;
    }
}
