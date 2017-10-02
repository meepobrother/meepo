import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPage } from './setting.page';
import { Routes, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { Index} from '@meepo/runner/demo';
const routes: Routes = [
    {
        path: '',
        component: SettingPage
    }
];
@NgModule({
    declarations: [
        SettingPage
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes),
        NgZorroAntdModule
     ],
    exports: [
        SettingPage
    ],
    providers: [],
})
export class SettingModule {}
