import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesPage } from './themes-page';
import { ThemesListFree } from './themes-list-free';
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
        ThemesListFree
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ShareModule],
    exports: [
        ThemesPage,
        ThemesListFree
    ],
    providers: [],
})
export class ThemesPageModule { }