import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesShopRoutingModule } from './services-shop-routing.module';
import { ServicesShopComponent } from './services-shop.component';
import {CoachFooterModule} from "../../runner-components/coach-footer/coach-footer.module";
import {ShopHeaderModule} from "../../runner-components/shop-header/shop-header.module";
import {ShopGoodsItemModule} from "../../runner-components/shop-goods-item/shop-goods-item.module";

@NgModule({
  imports: [
    CommonModule,
    ServicesShopRoutingModule,
    CoachFooterModule,
    ShopHeaderModule,
    ShopGoodsItemModule
  ],
  declarations: [ServicesShopComponent]
})
export class ServicesShopModule { }
