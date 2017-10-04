import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    SidebarModule
} from '../sidebar/sidebar.module';

import { DropdownModule } from '../dropdown/dropdown.module';
import { TopnavModule } from '../topnav/topnav.module';

import { MainLayoutComponent } from './main-layout/main-layout';
import { StylesComponent } from '../styles/styles';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ErrorModule } from './error';
import { ApiModule } from './api';


const modules = [
    CommonModule,
    SidebarModule,
    DropdownModule,
    TopnavModule,
    FlexLayoutModule,
    ErrorModule,
    ApiModule
];

@NgModule({
    declarations: [
        MainLayoutComponent,
        StylesComponent
    ],
    imports: [
        ...modules
    ],
    exports: [
        ...modules,
        MainLayoutComponent
    ],
    providers: [],
})
export class CoreModule { }

