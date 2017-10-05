import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingsPage } from './settings-page';
import { ShareModule } from '../../share';


const modules = [
    ShareModule
];

import {} from './aboutus-setting';
const components = [

];
const routes: Routes = [
    {
        path: '',
        component: SettingsPage
    }
];
@NgModule({
    declarations: [
        SettingsPage
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
