import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairGoodsRoutingModule } from './repair-goods-routing.module';
import { RepairGoodsComponent } from './repair-goods.component';
import {GoodsListModule} from "../../components-useing/goods-list/goods-list.module";
import {PayOrderModule} from "../../components-useing/pay-order/pay-order.module";
import {SkuModule} from "../../components-useing/sku/sku.module";
import {FeedTabModule} from "../../runner-components/feed-tab/feed-tab.module";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    RepairGoodsRoutingModule,
    GoodsListModule,
    PayOrderModule,
    SwiperDefaultModule,
    FeedTabModule,
    SkuModule
  ],
  declarations: [RepairGoodsComponent]
})
export class RepairGoodsModule { }
