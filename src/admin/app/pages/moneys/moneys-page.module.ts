import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoneysPage } from './moneys-page';

import { JifenList } from './jifen-list/jifen-list';
import { TixianList } from './tixian-list/tixian-list';
import { XinyuList } from './xinyu-list/xinyu-list';
import { YueList } from './yue-list/yue-list';

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
        MoneysPage,
        JifenList,
        TixianList,
        XinyuList,
        YueList
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ...modules],
    exports: [],
    providers: [],
})
export class MoneysPageModule { }
