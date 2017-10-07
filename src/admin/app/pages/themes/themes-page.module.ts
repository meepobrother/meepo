import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesPage } from './themes-page';

import { ThemesListFreeModule } from './themes-list-free';
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
    ShareModule,
    ThemesListFreeModule
];

import { ThemesMineService } from './themes-mine.service';
@NgModule({
    declarations: [
        ThemesPage,
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
    providers: [
        ThemesMineService
    ],
    entryComponents: [
        ThemesAdd
    ]
})
export class ThemesPageModule { }