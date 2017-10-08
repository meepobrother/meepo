import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairCoachRoutingModule } from './repair-coach-routing.module';
import { RepairCoachComponent } from './repair-coach.component';
import {RepairListModule} from "../repair-list/repair-list.module";
import {WechatAudioModule} from "../../runner-components/wechat-audio/wechat-audio.module";
import {TimeSelectModule} from "../../runner-components/time-select/time-select.module";
import {FormsModule} from "@angular/forms";
import {RepairShopTagModule} from '../repair-list/repair-shop-tag/repair-shop-tag.module';
@NgModule({
  imports: [
    CommonModule,
    RepairCoachRoutingModule,
    RepairListModule,
    WechatAudioModule,
    TimeSelectModule,
    FormsModule,
    RepairShopTagModule
  ],
  declarations: [RepairCoachComponent]
})
export class RepairCoachModule { }
