import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsGroup } from './goods-group';
@NgModule({
    declarations: [
        GoodsGroup
    ],
    imports: [ CommonModule ],
    exports: [
        GoodsGroup
    ],
    providers: [],
})
export class GoodsGroupModule {}