import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

import {HudongbaModule} from 'hudongba-components';

import {RunnerServicesModule} from 'services-components';

import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {MyjdOrderModule} from "../../runner-components/myjd-order/myjd-order.module";
import {MyjdQianbaoModule} from "../../runner-components/myjd-qianbao/myjd-qianbao.module";
import {HeadImgModule} from "../../runner-components/head-img/head-img.module";
import {MyjdContentModule} from "../../runner-components/myjd-content/myjd-content.module";
import {CoreComponentsModule} from "../../meepo-core/core-components/core-components.module";
import {WeuiGridsModule} from "../../runner-components/weui-grids/weui-grids.module";
import {FeedTabModule} from "../../runner-components/feed-tab/feed-tab.module";


@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    HudongbaModule,
    RunnerServicesModule,
    WeuiGridsModule,
    FeedTabModule,
    EditBtnModule,
    MyjdOrderModule,
    MyjdQianbaoModule,
    HeadImgModule,
    MyjdContentModule,
    CoreComponentsModule
  ],
  declarations: [IndexComponent]
})
export class HomeIndexModule { }
