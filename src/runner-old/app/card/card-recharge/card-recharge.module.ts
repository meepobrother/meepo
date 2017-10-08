import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRechargeRoutingModule } from './card-recharge-routing.module';
import { CardRechargeComponent } from './card-recharge.component';
import {CoachListModule} from "../../coach/coach-list/coach-list.module";
import {GoodsListModule} from "../../components-useing/goods-list/goods-list.module";
import {SkuModule} from "../../components-useing/sku/sku.module";
import {PayOrderModule} from "../../components-useing/pay-order/pay-order.module";
import {FeedTabModule} from "../../runner-components/feed-tab/feed-tab.module";

@NgModule({
  imports: [
    CommonModule,
    CardRechargeRoutingModule,
    CoachListModule,
    FeedTabModule,
    GoodsListModule,
      SkuModule,
      PayOrderModule
  ],
  declarations: [CardRechargeComponent]
})
export class CardRechargeModule { }
