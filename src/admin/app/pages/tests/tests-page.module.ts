import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsPage } from './tests-page';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../share';
import { MeepoModule } from '../../meepo/meepo.module';
import { BbsTopic } from './bbs-topic/bbs-topic';
import { SmallComponent } from './small/small';
const routes = [
    {
        path: '',
        component: TestsPage
    }
];

@NgModule({
    declarations: [
        TestsPage,
        BbsTopic,
        SmallComponent
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