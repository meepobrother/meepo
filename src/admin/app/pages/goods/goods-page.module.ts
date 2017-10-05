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

import { ShareModule } from '../../share';
import { GoodsGroupModule } from './goods-group';
import { GoodsListModule } from './goods-list';
import { GoodsTagsModule } from './goods-tags';


const modules = [
    ShareModule,
    GoodsGroupModule,
    GoodsListModule,
    GoodsTagsModule
];


@NgModule({
    declarations: [
        GoodsPage
    ],
    imports: [ 
        CommonModule, 
        RouterModule.forChild(routes),
        ...modules
    ],
    exports: [],
    providers: [],
})
export class GoodsPageModule {}