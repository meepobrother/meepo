import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesPage } from './themes-page';
import { ThemesListFreeModule } from './themes-list-free';
import { ThemesShops } from './themes-shops';
import { MyThemes } from './my-themes';

import { ShareSettingModule } from '../../share/setting/share.setting.module';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: ThemesPage
    }
];
import { ShareModule } from '../../share';
const modules = [
    ShareModule,
    ThemesListFreeModule
];

import { ThemesMineService } from './themes-mine.service';
@NgModule({
    declarations: [
        ThemesPage,
        ThemesShops,
        MyThemes
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ...modules, ShareSettingModule],
    exports: [
        ThemesPage,
        ThemesShops,
        MyThemes
    ],
    providers: [
        ThemesMineService
    ],
    entryComponents: []
})
export class ThemesPageModule { }