import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsPage } from './tests-page';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../share';
import { AddPageDialogModule } from './add-page-dialog';
const routes = [
    {
        path: '',
        component: TestsPage
    }
];

@NgModule({
    declarations: [
        TestsPage
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ShareModule,
        AddPageDialogModule
    ],
    exports: [
        TestsPage
    ],
    providers: [],
})
export class TestsPageModule { }