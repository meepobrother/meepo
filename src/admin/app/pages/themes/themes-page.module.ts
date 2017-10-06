import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesPage } from './themes-page';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: ThemesPage
    }
];
@NgModule({
    declarations: [
        ThemesPage
    ],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [
        ThemesPage
    ],
    providers: [],
})
export class ThemesPageModule {}