import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoutersPage } from './routers';
import { ShareModule } from '../share/share.module';
const routes: Routes = [
    {
        path: '',
        component: RoutersPage,
        children: [
            {
                path: 'welcome',
                loadChildren: 'app/pages/welcome#WelcomeModule'
            },
            {
                path: 'setting',
                loadChildren: 'app/pages/setting#SettingModule'
            }
        ]
    }
];

import { NzLayoutModule,NzMenuModule,NzBackTopModule,NzBreadCrumbModule } from 'ng-zorro-antd';
@NgModule({
    declarations: [
        RoutersPage
    ],
    imports: [
        CommonModule,
        NzLayoutModule,
        NzMenuModule,
        NzBackTopModule,
        NzBreadCrumbModule,
        RouterModule.forChild(routes),
        ShareModule
    ],
    exports: [],
    providers: [],
})
export class PagesModule { }





