import { Component, OnInit } from '@angular/core';
import { Layout } from '../layout';
import { _headerBodyFooterLayout } from './themes';
@Component({
    selector: 'layout-select',
    templateUrl: './layout-select.html',
    styleUrls: ['./layout-select.scss']
})
export class LayoutSelect implements OnInit {
    widgets: Layout[] = [
        _headerBodyFooterLayout
    ];
    constructor() { }

    ngOnInit() { }
}