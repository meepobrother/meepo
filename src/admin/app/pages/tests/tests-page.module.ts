import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsPage } from './tests-page';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../share';
import { MeepoModule } from '../../meepo/meepo.module';

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
        MeepoModule
    ],
    exports: [
        TestsPage
    ],
    providers: [],
})
export class TestsPageModule { }