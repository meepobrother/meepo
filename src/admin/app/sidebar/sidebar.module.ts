import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarItem, SidebarItemRight } from './sidebar-item/sidebar-item';
import { SidebarChildItem } from './sidebar-child-item/sidebar-child-item';
import { SidebarList } from './sidebar-list/sidebar-list';
import { SidebarContainer } from './sidebar-container/sidebar-container';

import { SidebarContainerService } from './sidebar-container.service';
import { SidebarService } from './sidebar.service';
import { SidebarHeader } from './sidebar-header/sidebar-header';
import { SidebarContent } from './sidebar-content/sidebar-content';

import { FlexLayoutModule } from '@angular/flex-layout';

const components = [
    SidebarItem,
    SidebarList,
    SidebarContainer,
    SidebarChildItem,
    SidebarItemRight,
    SidebarHeader,
    SidebarContent
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [ CommonModule, FlexLayoutModule ],
    exports: [
        ...components
    ],
    providers: [
        SidebarService,
        SidebarContainerService
    ],
})
export class SidebarModule {}



export { SidebarItem, SidebarItemRight } from './sidebar-item/sidebar-item';
export { SidebarChildItem } from './sidebar-child-item/sidebar-child-item';
export { SidebarList } from './sidebar-list/sidebar-list';
export { SidebarContainer } from './sidebar-container/sidebar-container';
export { SidebarContainerService } from './sidebar-container.service';
export { SidebarService } from './sidebar.service';
export { SidebarHeader } from './sidebar-header/sidebar-header';