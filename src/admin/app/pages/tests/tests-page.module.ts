import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsPage } from './tests-page';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../share';
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
        ShareModule
    ],
    exports: [
        TestsPage
    ],
    providers: [],
})
export class TestsPageModule { }