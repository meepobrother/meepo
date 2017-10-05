import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsTags } from './goods-tags';
import { GoodsTagsAdd } from './goods-tags-add';

@NgModule({
    declarations: [
        GoodsTags,
        GoodsTagsAdd
    ],
    imports: [ CommonModule ],
    exports: [
        GoodsTags,
        GoodsTagsAdd
    ],
    providers: [],
    entryComponents: [
        GoodsTagsAdd
    ]
})
export class GoodsTagsModule {}