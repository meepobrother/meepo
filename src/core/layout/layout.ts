import {
    Component, OnInit, ViewEncapsulation,
    ContentChild, AfterContentInit, ViewChild,
    OnChanges, SimpleChanges, NgModuleFactory
} from '@angular/core';

import { LayoutFooterRef, LayoutHeaderRef, LayoutLeftRef, LayoutRightRef, LayoutBodyRef } from './layout-ref';
import { LayoutBody, LayoutFooter, LayoutHeader, LayoutLeft, LayoutRight } from './layout-placeholder';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
    selector: 'layout',
    templateUrl: 'layout.html',
    styleUrls: ['layout.css'],
    exportAs: 'layout',
    encapsulation: ViewEncapsulation.None
})
export class Layout implements AfterContentInit, OnChanges {

    @ContentChild(LayoutBodyRef) bodyOutlet: LayoutBodyRef;
    @ContentChild(LayoutFooterRef) footerOutlet: LayoutFooterRef;
    @ContentChild(LayoutHeaderRef) headerOutlet: LayoutHeaderRef;
    @ContentChild(LayoutLeftRef) leftOutlet: LayoutLeftRef;
    @ContentChild(LayoutRightRef) rightOutlet: LayoutRightRef;


    bodyPortal: any;
    constructor(
    ) { }

    ngAfterContentInit() {
    }

    ngOnChanges() {

    }

    createBody() {}
}
