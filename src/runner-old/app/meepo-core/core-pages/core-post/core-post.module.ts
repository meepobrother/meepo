import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorePostRoutingModule } from './core-post-routing.module';
import {CorePostComponent} from "./core-post.component";
import {CoreTabbarModule} from "../../core-components/core-tabbar/core-tabbar.module";
import {ZanPopupModule} from "../../../components-common/zan-popup/zan-popup.module";
import {HeadImgModule} from "../../../runner-components/head-img/head-img.module";
import {MyjdQianbaoModule} from "../../../runner-components/myjd-qianbao/myjd-qianbao.module";
import {MyjdOrderModule} from "../../../runner-components/myjd-order/myjd-order.module";
import {MyjdContentModule} from "../../../runner-components/myjd-content/myjd-content.module";

@NgModule({
  imports: [
    CommonModule,
    CorePostRoutingModule,
    CoreTabbarModule,
      ZanPopupModule,
      HeadImgModule,
      MyjdQianbaoModule,
      MyjdOrderModule,
      MyjdContentModule,
  ],
  declarations: [CorePostComponent]
})
export class CorePostModule { }
