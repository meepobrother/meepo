import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { SettingsPage } from './settings-page';
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
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [],
    providers: [],
})
export class SettingsPageModule {}
