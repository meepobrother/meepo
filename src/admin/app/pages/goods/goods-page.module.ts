import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { GoodsPage } from './goods-page';
const routes: Routes = [
    {
        path: '',
        component: GoodsPage
    }
];
@NgModule({
    declarations: [
        GoodsPage
    ],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [],
    providers: [],
})
export class GoodsPageModule {}