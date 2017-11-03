import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    SidebarModule
} from '../sidebar/sidebar.module';

import { DropdownModule } from '../dropdown/dropdown.module';
import { TopnavModule } from '../topnav/topnav.module';

import { MainLayoutComponent } from './main-layout/main-layout';
import { ShopTagSelect } from './shop-tag-select';
import { ShopGroupSelect } from './shop-group-select';

import { GoodTagSelect } from './good-tag-select';
import { GoodGroupSelect } from './good-group-select';


import { StylesModule } from '../styles';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ErrorModule } from './error';
import { ApiModule } from './api';
import { UpdateModule } from './update';
import { MemberSelectModule } from './member-select';


import { LoginService } from './login.service';

import { MatDialogModule } from '@angular/material';
import { ColorSelectModule } from '../components/color-select';

import { ShareNewModule } from '../share-new/share-new.module';
import { MeepoModule } from '../meepo/meepo.module';
import { NavTabsModule } from '../components/nav-tabs';

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
    MatDialogModule,
    ColorSelectModule,
    ShareNewModule,
    MeepoModule,
    NavTabsModule
];

@NgModule({
    declarations: [
        MainLayoutComponent,
        ShopTagSelect,
        ShopGroupSelect,
        GoodTagSelect,
        GoodGroupSelect
    ],
    imports: [
        ...modules
    ],
    exports: [
        ...modules,
        MainLayoutComponent,
        ShopTagSelect,
        ShopGroupSelect,
        GoodTagSelect,
        GoodGroupSelect
    ],
    providers: [
        LoginService
    ],
})
export class CoreModule { }

