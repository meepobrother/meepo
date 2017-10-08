import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudIndexRoutingModule } from './cloud-index-routing.module';
import { CloudIndexComponent } from './cloud-index.component';
import {GoodsListModule} from "../../components-useing/goods-list/goods-list.module";
import {SkuModule} from "../../components-useing/sku/sku.module";

import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoachListModule} from "../../coach/coach-list/coach-list.module";
import {FeedTabModule} from "../../runner-components/feed-tab/feed-tab.module";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    CloudIndexRoutingModule,
    FeedTabModule,
    GoodsListModule,
    SkuModule,
    SwiperDefaultModule,
    CoachListModule
  ],
  declarations: [CloudIndexComponent],
  providers: [RunnerUtilService]
})
export class CloudIndexModule { }
