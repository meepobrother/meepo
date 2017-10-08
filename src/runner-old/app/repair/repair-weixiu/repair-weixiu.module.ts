import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairWeixiuRoutingModule } from './repair-weixiu-routing.module';
import { RepairWeixiuComponent } from './repair-weixiu.component';
import {BuyListModule} from "../../buy/buy-list/buy-list.module";
import {RepairListModule} from "../repair-list/repair-list.module";
import {ZanRadiosModule} from "../../components-common/zan-radios/com-radios.module";
import {ZanQuantityModule} from "../../components-common/van-quantity/van-quantity.module";
import {ZanStepsModule} from "../../components-common/van-steps/van-steps.module";
import {SkuModule} from "../../components-useing/sku/sku.module";
import {PayOrderModule} from "../../components-useing/pay-order/pay-order.module";
import {ExpressWayModule} from "../../components-useing/express-way/express-way.module";

@NgModule({
  imports: [
    CommonModule,
    RepairWeixiuRoutingModule,
    RepairListModule,
    ZanRadiosModule,
    ZanQuantityModule,
    ZanStepsModule,
    SkuModule,
    PayOrderModule,
    ExpressWayModule
  ],
  declarations: [RepairWeixiuComponent]
})
export class RepairWeixiuModule { }
