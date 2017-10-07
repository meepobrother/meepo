import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesPage } from './themes-page';

import { ThemesListFree } from './themes-list-free';
import { ThemesMine } from './themes-mine';
import { ThemesShops } from './themes-shops';


import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: ThemesPage
    }
];
import { ShareModule } from '../../share';
import { ThemesAdd } from './themes-add';
const modules = [
    ShareModule
];
@NgModule({
    declarations: [
        ThemesPage,
        ThemesListFree,
        ThemesMine,
        ThemesShops,
        ThemesAdd
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ...modules],
    exports: [
        ThemesPage,
        ThemesListFree,
        ThemesMine,
        ThemesShops,
        ThemesAdd
    ],
    providers: [],
    entryComponents: [
        ThemesAdd
    ]
})
export class ThemesPageModule { }