import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesPage } from './themes-page';

import { ThemesListFree } from './themes-list-free';
import { ThemesMine } from './themes-mine';
import { ThemesShops } from './themes-shops';


import { ShareModule } from '../../share';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: ThemesPage
    }
];
@NgModule({
    declarations: [
        ThemesPage,
        ThemesListFree,
        ThemesMine,
        ThemesShops
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ShareModule],
    exports: [
        ThemesPage,
        ThemesListFree,
        ThemesMine,
        ThemesShops
    ],
    providers: [],
})
export class ThemesPageModule { }