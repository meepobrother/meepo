import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreDetailRoutingModule } from './core-detail-routing.module';
import { CoreDetailComponent } from './core-detail.component';
import {TopNavModule} from "../../../runner-components/top-nav/top-nav.module";
import {CoreComponentsModule} from "../../core-components/core-components.module";
import {BuyListModule} from "../../../buy/buy-list/buy-list.module";
import {ListModule} from "../../../runner-components/list/list.module";
import {WechatAudioModule} from "../../../runner-components/wechat-audio/wechat-audio.module";
import {ImTaskModule} from "../../../im/im-task/im-task.module";
import {GeolocationModule} from "../../../runner-components/geolocation/geolocation.module";
import {SwiperModule} from "../../../runner-components/swiper/swiper.module";
import {WhiteSpaceModule} from "../../core/white-space/white-space.module";
import {ActivityIndicatorModule} from "../../core/activity-indicator/activity-indicator.module";

@NgModule({
  imports: [
    CommonModule,
    CoreDetailRoutingModule,
      SwiperModule,
      TopNavModule,
      BuyListModule,
      ListModule,
      WechatAudioModule,
      ImTaskModule,
      GeolocationModule,
      WhiteSpaceModule,
    ActivityIndicatorModule
  ],
  declarations: [CoreDetailComponent]
})
export class CoreDetailModule { }
