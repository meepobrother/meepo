import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { ShopsPage } from './shops-page';
const routes: Routes = [
    {
        path: '',
        component: ShopsPage
    }
];
@NgModule({
    declarations: [
        ShopsPage
    ],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [],
    providers: [],
})
export class ShopsPageModule {}
