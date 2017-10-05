import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsTags } from './goods-tags';
@NgModule({
    declarations: [
        GoodsTags
    ],
    imports: [ CommonModule ],
    exports: [
        GoodsTags
    ],
    providers: [],
})
export class GoodsTagsModule {}