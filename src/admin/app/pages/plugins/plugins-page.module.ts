import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { PluginsPage } from './plugins-page';
const routes: Routes = [
    {
        path: '',
        component: PluginsPage
    }
];
@NgModule({
    declarations: [
        PluginsPage
    ],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [],
    providers: [],
})
export class PluginsPageModule {}
