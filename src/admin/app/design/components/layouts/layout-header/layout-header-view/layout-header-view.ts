import { Component, OnInit, HostListener, Input } from '@angular/core';

import { LayoutService } from '../../layout.service';
import { LayoutHeader } from '../layout-header';
@Component({
    selector: 'layout-header-view',
    templateUrl: './layout-header-view.html',
    styleUrls: ['./layout-header-view.scss']
})
export class LayoutHeaderView implements OnInit {
    @Input() widget: LayoutHeader = new LayoutHeader();
    @HostListener('click',['$event'])
    onClick(evt: any){
        this.layout.onHeader(this.widget);
    }
    constructor(
        public layout: LayoutService
    ) { }

    ngOnInit() { }
}