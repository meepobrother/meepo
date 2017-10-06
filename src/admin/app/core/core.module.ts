import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    SidebarModule
} from '../sidebar/sidebar.module';

import { DropdownModule } from '../dropdown/dropdown.module';
import { TopnavModule } from '../topnav/topnav.module';

import { MainLayoutComponent } from './main-layout/main-layout';
import { StylesModule } from '../styles';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ErrorModule } from './error';
import { ApiModule } from './api';
import { UpdateModule } from './update';
import { MemberSelectModule } from './member-select';

import { ShareModule } from '../share';

import { LoginService } from './login.service';

const modules = [
    CommonModule,
    SidebarModule,
    DropdownModule,
    TopnavModule,
    FlexLayoutModule,
    ErrorModule,
    ApiModule,
    StylesModule,
    MemberSelectModule,
    ShareModule
];

@NgModule({
    declarations: [
        MainLayoutComponent
    ],
    imports: [
        ...modules
    ],
    exports: [
        ...modules,
        MainLayoutComponent
    ],
    providers: [
        LoginService
    ],
})
export class CoreModule { }

