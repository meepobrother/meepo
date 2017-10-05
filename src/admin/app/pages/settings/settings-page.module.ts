import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingsPage } from './settings-page';
import { ShareModule } from '../../share';

const modules = [
    ShareModule
];

import { AboutUsSetting } from './aboutus-setting';
import { PaymentSetting } from './payment-setting';
import { RightsSetting } from './rights-setting';
import { SmsSetting } from './sms-setting';
import { TemplateSetting } from './template-setting';
import { VersionSetting } from './version-setting';

const components = [
    AboutUsSetting,
    PaymentSetting,
    RightsSetting,
    SmsSetting,
    TemplateSetting,
    VersionSetting,
    SettingsPage
];
const routes: Routes = [
    {
        path: '',
        component: SettingsPage
    }
];
@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ...modules
    ],
    exports: [],
    providers: [],
})
export class SettingsPageModule { }
