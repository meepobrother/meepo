import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesPage } from './themes-page';

import { ThemesListFreeModule } from './themes-list-free';
import { ThemesShops } from './themes-shops';


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
        ThemesShops
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ...modules],
    exports: [
        ThemesPage,
        ThemesShops
    ],
    providers: [
        ThemesMineService
    ],
    entryComponents: []
})
export class ThemesPageModule { }