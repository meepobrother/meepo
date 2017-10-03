import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBody, LayoutFooter, LayoutHeader, LayoutLeft, LayoutRight } from './layout-placeholder';
import { LayoutFooterRef, LayoutHeaderRef, LayoutLeftRef, LayoutRightRef, LayoutBodyRef, LayoutHeaderLeftRef, LayoutHeaderRightRef, LayoutHeaderTitleRef } from './layout-ref';
import { PortalModule } from '@angular/cdk/portal';

import { Layout } from './layout';
const components = [
    LayoutBody, LayoutFooter,
    LayoutHeader, LayoutLeft, LayoutRight,
    Layout, LayoutFooterRef, LayoutHeaderRef,
    LayoutLeftRef, LayoutRightRef, LayoutBodyRef,
    LayoutHeaderLeftRef, LayoutHeaderRightRef, LayoutHeaderTitleRef
];
@NgModule({
    declarations: [
        ...components
    ],
    imports: [CommonModule, PortalModule],
    exports: [
        ...components
    ],
    providers: [],
})
export class LayoutModule { }
