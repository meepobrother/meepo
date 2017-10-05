import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoneysPage } from './moneys-page';
const routes: Routes = [
    {
        path: '',
        component: MoneysPage
    }
];
import { ShareModule } from '../../share';

const modules = [
    ShareModule
];
@NgModule({
    declarations: [
        MoneysPage
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ...modules],
    exports: [],
    providers: [],
})
export class MoneysPageModule { }
