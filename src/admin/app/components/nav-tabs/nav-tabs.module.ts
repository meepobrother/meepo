import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTabs } from './nav-tabs';
import { NavTabPane, NavTabPaneRef } from './nav-tab-pane/nav-tab-pane';

const components = [
    NavTabs,
    NavTabPane,
    NavTabPaneRef
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [ CommonModule ],
    exports: [
        ...components
    ],
    providers: [],
})
export class NavTabsModule {}