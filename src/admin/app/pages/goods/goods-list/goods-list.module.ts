import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsList } from './goods-list';
@NgModule({
    declarations: [
        GoodsList
    ],
    imports: [ CommonModule ],
    exports: [
        GoodsList
    ],
    providers: [],
})
export class GoodsListModule {}