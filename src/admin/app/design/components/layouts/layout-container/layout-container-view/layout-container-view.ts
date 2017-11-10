import { Component, OnInit, Input, ContentChild, HostBinding, ElementRef } from '@angular/core';
import { LayoutContainerModel } from '../../../../classes';

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
    @Input() widget: LayoutContainerModel = new LayoutContainerModel();

    @ContentChild(LayoutBodyView) _body: LayoutBodyView;
    @ContentChild(LayoutHeaderView) _header: LayoutHeaderView;
    @ContentChild(LayoutFooterView) _footer: LayoutFooterView;
    @ContentChild(LayoutMenuView) _menu: LayoutMenuView;

    @HostBinding('class.layout-container') _container: boolean = true;

    constructor(
        public ele: ElementRef
    ) { }

    ngOnInit() { }

    onDropBody(widget: any) {
        console.log('放在body里', widget);
        this.widget.body.children.push(widget.data);
        console.log(this.widget.body.children);
    }
}