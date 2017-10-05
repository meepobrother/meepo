import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsGroup } from './goods-group';
import { GoodsGroupAdd } from './goods-group-add';

@NgModule({
    declarations: [
        GoodsGroup,
        GoodsGroupAdd
    ],
    imports: [ CommonModule ],
    exports: [
        GoodsGroup,
        GoodsGroupAdd
    ],
    providers: [],
    entryComponents: [
        GoodsGroupAdd
    ]
})
export class GoodsGroupModule {}