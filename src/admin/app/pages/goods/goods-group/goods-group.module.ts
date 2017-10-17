import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsGroup } from './goods-group';
import { GoodsGroupAdd } from './goods-group-add';
import { ShareModule } from '../../../share';
@NgModule({
    declarations: [
        GoodsGroup,
        GoodsGroupAdd
    ],
    imports: [ CommonModule, ShareModule ],
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