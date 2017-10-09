import { Component, OnInit, Input, HostBinding, ViewChild } from '@angular/core';
import { Layout } from '../layout';

import { LayoutContainerView } from '../../layout-container';

@Component({
    selector: 'layout-view',
    templateUrl: './layout-view.html',
    styleUrls: ['./layout-view.scss']
})
export class LayoutView implements OnInit {
    @Input() widget: Layout = new Layout();
    @HostBinding('class.layout') _layout: boolean = true;
    @ViewChild(LayoutContainerView) _container: LayoutContainerView;

    constructor() { }

    ngOnInit() { }
}