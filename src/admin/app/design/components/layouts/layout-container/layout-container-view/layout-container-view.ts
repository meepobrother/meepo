import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core';
import { LayoutContainer } from '../layout-container';

import { LayoutBodyView } from '../../layout-body';
import { LayoutHeaderView } from '../../layout-header';
import { LayoutFooterView } from '../../layout-footer';
import { LayoutMenuView } from '../../layout-menu';


@Component({
    selector: 'layout-container-view',
    templateUrl: './layout-container-view.html',
    styleUrls: ['./layout-container-view.scss']
})
export class LayoutContainerView implements OnInit {
    @Input() widget: LayoutContainer = new LayoutContainer();
    @ContentChild(LayoutBodyView) _body: LayoutBodyView;
    @ContentChild(LayoutHeaderView) _header: LayoutHeaderView;
    @ContentChild(LayoutFooterView) _footer: LayoutFooterView;
    @ContentChild(LayoutMenuView) _menu: LayoutMenuView;

    @HostBinding('class.layout-container') _container: boolean = true;
    
    constructor() { }

    ngOnInit() { }
}