import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsList } from './goods-list';
import { GoodsListAdd } from './goods-list-add';

@NgModule({
    declarations: [
        GoodsList,
        GoodsListAdd
    ],
    imports: [ CommonModule ],
    exports: [
        GoodsList,
        GoodsListAdd
    ],
    providers: [],
    entryComponents: [
        GoodsListAdd
    ]
})
export class GoodsListModule {}