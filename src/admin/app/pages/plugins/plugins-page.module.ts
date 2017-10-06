import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { PluginsPage } from './plugins-page';
import { PluginsList } from './plugins-list';

const routes: Routes = [
    {
        path: '',
        component: PluginsPage
    }
];
@NgModule({
    declarations: [
        PluginsPage,
        PluginsList
    ],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [],
    providers: [],
})
export class PluginsPageModule {}
